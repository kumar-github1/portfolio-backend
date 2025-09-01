import { login, register } from '../services/authService.js'

export const registerUser = async (req, res) => {
    try {
        const user = await register(req.body.username, req.body.email, req.body.password);
        res.status(201).json({ message: "User registered successfully" })
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const loginUser = async (req, res) => {
    try {
        const result = await login(req.body.email, req.body.password);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}