const express = require('express');
const router = express.Router();
const { getSavings, postSavings } = require('../controllers/savingsController');
const authMiddleware = require('../middleware/authMiddleware'); // Ensure authentication

// Route to get user-specific savings
router.get('/', getSavings);
router.post('/', postSavings);
module.exports = router;