const express = require('express');
const contactController = require('../controllers/contact.controller');

const router = express.Router();

// POST /api/contact - Create a new lead
router.post('/', contactController.createLead);

// GET /api/contact - Get all leads (for admin purposes)
router.get('/', contactController.getAllLeads);

// GET /api/contact/:id - Get a specific lead
router.get('/:id', contactController.getLeadById);

module.exports = router;
