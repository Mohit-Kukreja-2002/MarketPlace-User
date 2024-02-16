import User from "../models/user.js";
import dotenv from 'dotenv';
import { dirname } from 'path';
import { fileURLToPath } from "url";
import jwt from "jsonwebtoken";
import path from "path";
import ejs from "ejs";
import sendMail from "../sendMail.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";
dotenv.config();

export const registerUser = async (req, res) => {
    try {
        const { name,email, password } = req.body;

        if (password.length < 8) {
            return res.status(400).json({
                error: "Password must be at least 8 characters"
            });
        }

        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ error: "This email is already registered with another account" })
        }

        user = ({
            name:name,
            email: email,
            password: password,
        })

        const activationToken = createActivationToken(user);

        const activationCode = activationToken.activationCode;
        const data = { activationCode };

        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);

        // console.log(path.join(__dirname, "../mails/activation-mail.ejs"));
        const html = await ejs.renderFile(
            path.join(__dirname, "../mails/activation-mail.ejs"),
            data
        );
        try {
            await sendMail({
                email: user.email,
                subject: "Account Activation Mail",
                template: "activation-mail.ejs",
                data,
            });
            res.status(200).json({
                success: true,
                message: `Please check your email: ${user.email} to activate your account`,
                activationToken: activationToken.token,
            });
        } catch (error) {
            console.log(error.message)
            return res.status(400).json({ error: "Error sending email" });
        }

    } catch (error) {
        console.log("error in signup controller: ", error);
        res.status(500).json({ error: "Internal Server error" });
    }
}

export const createActivationToken = (user) => {
    const activationCode = Math.floor(1000 + Math.random() * 9000).toString();
    const token = jwt.sign(
        {
            user,
            activationCode,
        },
        process.env.ACTIVATION_SECRET,
        {
            expiresIn: "5m",
        }
    );
    return { token, activationCode };
};

export const activateUser = async (req, res) => {
    try {
        const { activation_token, activation_code } = req.body;
        const newUser = jwt.verify(
            activation_token,
            process.env.ACTIVATION_SECRET,
        )
        if (newUser.activationCode !== activation_code) {
            return res.status(400).json({ error: "Incorrect activation code" });
        }

        const { email, password, name } = newUser.user;
        const existUser = await User.findOne({ email });
        if (existUser) {
            return res.status(400).json({ error: "This email is already registered with another account" });
        }

        const user = await User.create({
            name,
            email,
            password,
        });

        req.body = { email, password, name }
        await loginUser(req, res);
    }
    catch (error) {
        console.log("Error in activateUser", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }

}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                error: "All the credentials are required"
            })
        }
        const user = await User.findOne({ email }).select("+password");
        if (!user) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        const isPasswordMatch = await user.comparePassword(password.trim());
        if (!isPasswordMatch) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        generateTokenAndSetCookie(user._id, res);

        await user.save();
        res.status(200).json({
            success: true,
            user
        });

    } catch (error) {
        console.log("Error in loginUser", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

export const logoutUser = async (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}