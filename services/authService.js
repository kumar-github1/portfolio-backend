import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

export const register = async (username, email, password) => {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error("user already exists")
    }
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    const user = new User({
        username,
        email,
        password: hashed
    })

    const newUser = await user.save();
    return { message: "User registered successfully" }
}

export const login = async (email, password) => {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
        throw new Error("User does not exist try loging in")
    }
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
        throw new Error("Invalid Credentials")
    }
    const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" })
    return { token, user: { id: existingUser._id, username: existingUser.username, email: existingUser.email } }
}