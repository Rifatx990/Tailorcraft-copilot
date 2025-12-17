// Define authentication routes
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// POST /auth/register
router.post('/register', userController.registerUser);

// POST /auth/login
router.post('/login', userController.loginUser);

// GET /auth/verifyToken
router.get('/verifyToken', userController.verifyToken);

module.exports = router;