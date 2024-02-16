import jwt from 'jsonwebtoken';
import User from '../models/user.js'
export const isAuthenticated = async (req, res, next) => {
    const access_token = req.cookies.jwt;

    if (!access_token) {
        return res.status(400).json({
            error: "First login to proceed"
        });
    }

    try {
        const decoded = jwt.verify(access_token, process.env.JWT_SECRET);

        if (!decoded) {
            return res.status(400).json({
                error: "JWT token is not valid",
            });
        }

        // Check if the access token is expired
        if (decoded.exp && decoded.exp <= Date.now() / 1000) {
            return res.status(400).json({
                error: "JWT token has expired",
            });
        } else {
            const user = await User.findById(decoded.userId);

            if (!user) {
                return res.status(400).json({
                    error: "First login to proceed"
                });
            }

            req.user = user;
            next();
        }
    } catch (error) {
        console.log("Error is IsAuthenticated", error.message)
        return res.status(500).json({
            error: "Internal Server Error"
        });
    }
};