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

// Create transporter for Gmail (for admin notifications)
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD // Use App Password for Gmail
    }
  });
};

// Create transporter for Hanzwell Agency emails (for user confirmations)
const createHanzwellTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER2,
      pass: process.env.EMAIL_APP_PASSWORD2 // Use App Password for Hanzwell Agency
    }
  });
};

const sendLeadNotification = async (lead) => {
  try {
    const transporter = createTransporter();
    
    // Send to both admin emails - using EMAIL_USER2 as the second admin email
    const adminEmails = [process.env.ADMIN_EMAIL, process.env.EMAIL_USER2].filter(Boolean);
    
    console.log('🔍 DEBUG: Admin emails configured:', adminEmails);
    console.log('🔍 DEBUG: ADMIN_EMAIL:', process.env.ADMIN_EMAIL);
    console.log('🔍 DEBUG: EMAIL_USER2 (second admin):', process.env.EMAIL_USER2);
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: adminEmails.join(','),
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

    console.log('📤 Sending lead notification to:', adminEmails.join(', '));
    console.log('📤 Email subject:', mailOptions.subject);
    
    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Lead notification email sent successfully!');
    console.log('📧 Message ID:', result.messageId);
    console.log('📧 Recipients:', result.accepted);
    console.log('📧 Rejected:', result.rejected);
    
    return { success: true, message: 'Email sent successfully', messageId: result.messageId };
  } catch (error) {
    console.error('❌ Lead notification email sending error:', error);
    console.error('❌ Error details:', error.message);
    throw error;
  }
};

const sendConfirmationEmail = async (lead) => {
  try {
    const transporter = createHanzwellTransporter();
    
    const mailOptions = {
      from: process.env.EMAIL_USER2, // Send from Hanzwell Agency email
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

    console.log('📤 Sending confirmation email from Hanzwell Agency to:', lead.email);
    console.log('📤 From email:', process.env.EMAIL_USER2);
    
    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Confirmation email sent successfully from Hanzwell Agency!');
    console.log('📧 Message ID:', result.messageId);
    console.log('📧 Recipients:', result.accepted);
    
    return { success: true, message: 'Confirmation email sent', messageId: result.messageId };
  } catch (error) {
    console.error('❌ Confirmation email sending error:', error);
    console.error('❌ Error details:', error.message);
    throw error;
  }
};

module.exports = {
  sendLeadNotification,
  sendConfirmationEmail
};
