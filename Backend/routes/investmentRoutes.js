const express = require("express");
const router = express.Router();
const { getInvestment, postInvestment } = require('../controllers/investmentController');

router.get('/', getInvestment);
router.post('/', postInvestment);
module.exports = router;
