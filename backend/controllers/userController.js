// User Controller for authentication logic
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const users = []; // Temporary array to mimic database

const registerUser = async (req, res) => {
    const { username, password } = req.body;

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Save user with hashed password
    users.push({ username, password: hashedPassword });
    res.status(201).json({ message: 'User registered successfully!' });
};

const loginUser = async (req, res) => {
    const { username, password } = req.body;

    // Find the user
    const user = users.find(u => u.username === username);
    if (!user) return res.status(404).json({ error: 'User not found' });

    // Check the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: 'Invalid password' });

    // Generate JWT token
    const token = jwt.sign({ username: user.username }, 'secretKey', { expiresIn: '1h' });
    res.status(200).json({ token });
};

const verifyToken = (req, res) => {
    const token = req.header('Authorization');
    if (!token) return res.status(403).json({ error: 'Access denied' });

    try {
        const verified = jwt.verify(token, 'secretKey');
        res.status(200).json({ user: verified });
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

module.exports = {
    registerUser,
    loginUser,
    verifyToken
};