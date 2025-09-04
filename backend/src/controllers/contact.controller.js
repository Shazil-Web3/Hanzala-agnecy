const Lead = require('../models/lead.model');
const emailService = require('../utils/email');

// Create a new lead
const createLead = async (req, res) => {
  try {
    const { name, email, phone, message, company } = req.body;

    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: 'Name and email are required'
      });
    }

    // Create new lead
    const lead = new Lead({
      name,
      email,
      phone: phone || '',
      message: message || '',
      company: company || '',
      service: 'general',
      status: 'new',
      createdAt: new Date()
    });

    // Save to database
    const savedLead = await lead.save();

    // Send email notification (placeholder for now)
    try {
      await emailService.sendLeadNotification(savedLead);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the request if email fails
    }

    res.status(201).json({
      success: true,
      message: 'Lead created successfully',
      data: {
        id: savedLead._id,
        name: savedLead.name,
        email: savedLead.email,
        status: savedLead.status
      }
    });

  } catch (error) {
    console.error('Error creating lead:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create lead',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
};

// Get all leads
const getAllLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    
    res.json({
      success: true,
      data: leads
    });
  } catch (error) {
    console.error('Error fetching leads:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch leads',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
};

// Get lead by ID
const getLeadById = async (req, res) => {
  try {
    const { id } = req.params;
    const lead = await Lead.findById(id);

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: 'Lead not found'
      });
    }

    res.json({
      success: true,
      data: lead
    });
  } catch (error) {
    console.error('Error fetching lead:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch lead',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
};

module.exports = {
  createLead,
  getAllLeads,
  getLeadById
};
