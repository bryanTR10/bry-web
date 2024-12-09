const userService = require('../services/userService');

const createUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const newUser = await userService.createUser({ name, email, password, role });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
const registerUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userService.createUser({ email, password });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
    
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { user, token } = await userService.loginUser(email, password);
        res.json({ user, token });
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
};