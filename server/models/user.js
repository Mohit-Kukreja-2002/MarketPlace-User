import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"]
    },

    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true
    },

    password: {
        type: String,
        required: [true, "Please enter your password"],
        minlength: [8, "Password must be atleast 8 characters"],
    },

    address: {
        type: String,
    },

    wishlist: [String]
}, { timestamps: true })

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    try {
        this.password = await bcrypt.hash(this.password, 10);
        return next();
    } catch (err) {
        return next(err);
    }
});

// Compare password method
UserSchema.methods.comparePassword = function (enteredPassword) {
    return bcrypt.compareSync(enteredPassword, this.password)
}

export default mongoose.models.User || mongoose.model('User', UserSchema);