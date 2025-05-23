const express = require('express');
const router = express.Router();
const { getSavings, postSavings } = require('../controllers/savingsController');

// Route to get user-specific savings
router.get('/', getSavings);
router.post('/', postSavings);
module.exports = router;