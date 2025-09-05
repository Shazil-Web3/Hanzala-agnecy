const Lead = require('../models/lead.model');
const emailService = require('../utils/email');

// Create a new lead
const createLead = async (req, res) => {
  try {
    const { name, email, countryCode, phone, message, company } = req.body;

    // Validate required fields
    if (!name || !email || !countryCode || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, country code, phone, and message are required'
      });
    }

    // Validate email format
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address'
      });
    }

    // Create new lead
    const lead = new Lead({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      countryCode: countryCode.trim(),
      phone: phone.trim(),
      message: message.trim(),
      company: company ? company.trim() : '',
      service: 'general',
      status: 'new',
      createdAt: new Date()
    });

    // Save to database
    const savedLead = await lead.save();

    // Send email notifications
    let emailResults = { admin: null, user: null };
    
    try {
      // Send notification to admin
      emailResults.admin = await emailService.sendLeadNotification(savedLead);
      console.log('✅ Admin notification sent');
    } catch (emailError) {
      console.error('❌ Admin email sending failed:', emailError);
      // Don't fail the request if admin email fails
    }

    try {
      // Send confirmation to user
      emailResults.user = await emailService.sendConfirmationEmail(savedLead);
      console.log('✅ User confirmation sent');
    } catch (emailError) {
      console.error('❌ User confirmation email failed:', emailError);
      // Don't fail the request if user email fails
    }

    res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been sent successfully. We will get back to you within 24 hours.',
      data: {
        id: savedLead._id,
        name: savedLead.name,
        email: savedLead.email,
        status: savedLead.status,
        emailsSent: {
          admin: emailResults.admin ? true : false,
          user: emailResults.user ? true : false
        }
      }
    });

  } catch (error) {
    console.error('Error creating lead:', error);
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors
      });
    }

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
