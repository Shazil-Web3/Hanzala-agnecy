const nodemailer = require('nodemailer');

// Helper function to format service names
const formatServiceName = (service) => {
  const serviceMap = {
    'marketing': 'Marketing',
    'website': 'Website',
    'llc-ltd': 'LLC, LTD',
    'payment-gateway': 'Payment Gateway Formation'
  };
  return serviceMap[service] || service;
};

// Create transporter for Gmail
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD // Use App Password for Gmail
    }
  });
};

const sendLeadNotification = async (lead) => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Lead: ${lead.name} - ${formatServiceName(lead.service)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">New Lead Received</h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #4CAF50; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${lead.name}</p>
            <p><strong>Email:</strong> ${lead.email}</p>
            <p><strong>Phone:</strong> ${lead.countryCode} ${lead.phone}</p>
            <p><strong>Company:</strong> ${lead.company || 'Not provided'}</p>
            <p><strong>Service Interested In:</strong> <span style="color: #4CAF50; font-weight: bold;">${formatServiceName(lead.service)}</span></p>
          </div>
          
          <div style="background-color: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2e7d32; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${lead.message}</p>
          </div>
          
          <div style="background-color: #f0f0f0; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Date:</strong> ${new Date(lead.createdAt).toLocaleString()}</p>
            <p><strong>Lead ID:</strong> ${lead._id}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #4CAF50; color: white; border-radius: 8px;">
            <p style="margin: 0; font-weight: bold;">Please respond to this lead within 24 hours for best results!</p>
          </div>
        </div>
      `
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('📧 Lead notification email sent successfully:', result.messageId);
    
    return { success: true, message: 'Email sent successfully', messageId: result.messageId };
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
};

const sendConfirmationEmail = async (lead) => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: lead.email,
      subject: 'Thank you for your interest! - Hanzwell Agency',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4CAF50; text-align: center;">Thank you, ${lead.name}!</h2>
          
          <div style="background-color: #f9f9f9; padding: 30px; border-radius: 8px; margin: 20px 0;">
            <p style="font-size: 16px; line-height: 1.6;">We have received your inquiry for <strong style="color: #4CAF50;">${formatServiceName(lead.service)}</strong> services and are excited to learn more about your project. Our team will review your message and get back to you within 24 hours.</p>
            
            <div style="background-color: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #2e7d32; margin-top: 0;">What happens next?</h3>
              <ul style="color: #333;">
                <li>We'll review your requirements for ${formatServiceName(lead.service)} services</li>
                <li>Our team will prepare a customized proposal</li>
                <li>We'll schedule a call to discuss your project in detail</li>
                <li>We'll provide you with a timeline and pricing</li>
              </ul>
            </div>
            
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #4CAF50; color: white; border-radius: 8px;">
            <p style="margin: 0; font-weight: bold;">Best regards,<br>Hanzala Project Team</p>
          </div>
        </div>
      `
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('📧 Confirmation email sent successfully:', result.messageId);
    
    return { success: true, message: 'Confirmation email sent', messageId: result.messageId };
  } catch (error) {
    console.error('Confirmation email error:', error);
    throw error;
  }
};

module.exports = {
  sendLeadNotification,
  sendConfirmationEmail
};
