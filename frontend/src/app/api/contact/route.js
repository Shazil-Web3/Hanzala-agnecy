import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { supabase } from '@/lib/supabase';

const resend = new Resend(process.env.RESEND_API_KEY);

const ADMIN_EMAILS = [
  process.env.ADMIN_EMAIL_1 || 'hanzwellagency@gmail.com',
  process.env.ADMIN_EMAIL_2 || 'shazilsaddique72@gmail.com'
].filter(Boolean);

const formatServiceName = (service) => {
  const serviceMap = {
    'marketing': 'Digital Marketing',
    'website': 'Website Creation',
    'llc-ltd': 'LLC / LTD Formation',
    'payment-gateway': 'Payment Gateway Setup'
  };
  return serviceMap[service] || service;
};

// HTML Email Template for Admin Notifications
const getAdminEmailHTML = (lead) => {
  const formattedService = formatServiceName(lead.service);
  const dateStr = new Date().toLocaleString('en-US', { timeZone: 'UTC', dateStyle: 'full', timeStyle: 'short' });

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Lead Notification</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #0d0d0d; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #e5e5e5;">
      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #0d0d0d; padding: 40px 20px;">
        <tr>
          <td align="center">
            <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #161618; border-radius: 12px; border: 1px solid #2a2a2e; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
              
              <!-- Header -->
              <tr>
                <td style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 28px 32px;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td>
                        <span style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: rgba(255,255,255,0.85);">Hanzwell Agency</span>
                        <h1 style="margin: 6px 0 0 0; font-size: 24px; font-weight: 800; color: #ffffff;">🚀 New Lead Inquiry Received!</h1>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Lead Details -->
              <tr>
                <td style="padding: 32px;">
                  
                  <div style="background-color: #1f1f23; border-radius: 8px; border-left: 4px solid #10b981; padding: 16px 20px; margin-bottom: 24px;">
                    <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #10b981; font-weight: 700;">Service Requested</span>
                    <h2 style="margin: 4px 0 0 0; font-size: 20px; color: #ffffff; font-weight: 700;">${formattedService}</h2>
                  </div>

                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 24px;">
                    <tr>
                      <td width="50%" style="padding-right: 10px; vertical-align: top;">
                        <div style="background-color: #1f1f23; border-radius: 8px; padding: 16px;">
                          <div style="font-size: 11px; color: #8e8e93; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600; margin-bottom: 4px;">Client Name</div>
                          <div style="font-size: 15px; font-weight: 700; color: #ffffff;">${lead.name}</div>
                        </div>
                      </td>
                      <td width="50%" style="padding-left: 10px; vertical-align: top;">
                        <div style="background-color: #1f1f23; border-radius: 8px; padding: 16px;">
                          <div style="font-size: 11px; color: #8e8e93; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600; margin-bottom: 4px;">Email Address</div>
                          <div style="font-size: 15px; font-weight: 700; color: #10b981;"><a href="mailto:${lead.email}" style="color: #10b981; text-decoration: none;">${lead.email}</a></div>
                        </div>
                      </td>
                    </tr>
                    <tr><td height="12"></td></tr>
                    <tr>
                      <td width="50%" style="padding-right: 10px; vertical-align: top;">
                        <div style="background-color: #1f1f23; border-radius: 8px; padding: 16px;">
                          <div style="font-size: 11px; color: #8e8e93; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600; margin-bottom: 4px;">Phone Number</div>
                          <div style="font-size: 15px; font-weight: 700; color: #ffffff;">${lead.country_code} ${lead.phone}</div>
                        </div>
                      </td>
                      <td width="50%" style="padding-left: 10px; vertical-align: top;">
                        <div style="background-color: #1f1f23; border-radius: 8px; padding: 16px;">
                          <div style="font-size: 11px; color: #8e8e93; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600; margin-bottom: 4px;">Company</div>
                          <div style="font-size: 15px; font-weight: 700; color: #ffffff;">${lead.company || 'N/A'}</div>
                        </div>
                      </td>
                    </tr>
                  </table>

                  <!-- Message Content -->
                  <div style="background-color: #1f1f23; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                    <div style="font-size: 11px; color: #8e8e93; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600; margin-bottom: 8px;">Client Message</div>
                    <div style="font-size: 14px; line-height: 1.6; color: #d1d1d6; white-space: pre-wrap;">${lead.message}</div>
                  </div>

                  <div style="text-align: center; font-size: 12px; color: #636366; padding-top: 12px; border-top: 1px solid #2a2a2e;">
                    Submitted on ${dateStr}
                  </div>

                </td>
              </tr>

              <!-- Footer CTA -->
              <tr>
                <td style="background-color: #10b981; padding: 16px; text-align: center; font-size: 13px; font-weight: 700; color: #ffffff;">
                  ⚡ Action Required: Respond within 24 hours for maximum conversion rate!
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
};

// HTML Email Template for Customer Confirmation
const getCustomerEmailHTML = (lead) => {
  const formattedService = formatServiceName(lead.service);

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Thank You for Contacting Hanzwell Agency</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #0f172a; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #e2e8f0;">
      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #0f172a; padding: 40px 20px;">
        <tr>
          <td align="center">
            <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #1e293b; border-radius: 16px; border: 1px solid #334155; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.6);">
              
              <!-- Header -->
              <tr>
                <td style="background: linear-gradient(135deg, #10b981 0%, #0d9488 100%); padding: 36px 32px; text-align: center;">
                  <h1 style="margin: 0; font-size: 28px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">Hanzwell Agency</h1>
                  <p style="margin: 8px 0 0 0; font-size: 15px; color: rgba(255,255,255,0.9); font-weight: 500;">Digital Marketing & Web Creation Specialists</p>
                </td>
              </tr>

              <!-- Main Body -->
              <tr>
                <td style="padding: 36px 32px;">
                  <h2 style="margin: 0 0 16px 0; font-size: 22px; font-weight: 700; color: #ffffff;">Thank you, ${lead.name}! 👋</h2>
                  
                  <p style="font-size: 15px; line-height: 1.7; color: #cbd5e1; margin-bottom: 24px;">
                    We have successfully received your inquiry regarding our <strong style="color: #34d399;">${formattedService}</strong> services. Our team is already reviewing your details and will prepare a tailored response for your business.
                  </p>

                  <!-- What Happens Next Section -->
                  <div style="background-color: #0f172a; border-radius: 12px; border: 1px solid #334155; padding: 24px; margin-bottom: 28px;">
                    <h3 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 700; color: #34d399; text-transform: uppercase; letter-spacing: 0.5px;">What Happens Next?</h3>
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="32" style="vertical-align: top; font-size: 18px;">1️⃣</td>
                        <td style="padding-bottom: 12px; font-size: 14px; color: #e2e8f0; line-height: 1.5;">
                          <strong>Requirement Analysis:</strong> We analyze your goals for ${formattedService}.
                        </td>
                      </tr>
                      <tr>
                        <td width="32" style="vertical-align: top; font-size: 18px;">2️⃣</td>
                        <td style="padding-bottom: 12px; font-size: 14px; color: #e2e8f0; line-height: 1.5;">
                          <strong>Customized Proposal:</strong> We prepare a customized strategy & roadmap.
                        </td>
                      </tr>
                      <tr>
                        <td width="32" style="vertical-align: top; font-size: 18px;">3️⃣</td>
                        <td style="font-size: 14px; color: #e2e8f0; line-height: 1.5;">
                          <strong>Direct Consultation:</strong> One of our senior strategists will reach out to you within 24 hours.
                        </td>
                      </tr>
                    </table>
                  </div>

                  <p style="font-size: 14px; line-height: 1.6; color: #94a3b8; margin-bottom: 0;">
                    If you have any immediate questions, feel free to reply directly to this email or contact us at <a href="mailto:hanzwellagency@gmail.com" style="color: #34d399; text-decoration: underline;">hanzwellagency@gmail.com</a>.
                  </p>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background-color: #0f172a; border-top: 1px solid #334155; padding: 24px; text-align: center; font-size: 13px; color: #64748b;">
                  <p style="margin: 0 0 6px 0; font-weight: 600; color: #94a3b8;">Hanzwell Agency Team</p>
                  <p style="margin: 0;">Growth & Strategy Solutions</p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
};

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, countryCode, phone, company, service, message } = body;

    // 1. Validation
    if (!name || !email || !countryCode || !phone || !service || !message) {
      return NextResponse.json(
        { success: false, message: 'Please complete all required fields.' },
        { status: 400 }
      );
    }

    const leadData = {
      name: name.trim(),
      email: email.toLowerCase().trim(),
      country_code: countryCode.trim(),
      phone: phone.trim(),
      company: company ? company.trim() : null,
      service: service.trim(),
      message: message.trim(),
      status: 'new'
    };

    // 2. Insert into Supabase Database
    const { data: savedLead, error: dbError } = await supabase
      .from('leads')
      .insert([leadData])
      .select()
      .single();

    if (dbError) {
      console.error('Supabase DB Insert Error:', dbError);
      return NextResponse.json(
        { success: false, message: 'Failed to save form submission to database.', error: dbError.message },
        { status: 500 }
      );
    }

    console.log('✅ Lead saved to Supabase:', savedLead.id);

    // 3. Send Email 1 & 2: Notification to Admin Emails
    let adminEmailStatus = false;
    try {
      const adminEmailResponse = await resend.emails.send({
        from: 'Hanzwell Agency Leads <onboarding@resend.dev>',
        to: ADMIN_EMAILS,
        replyTo: leadData.email,
        subject: `🔥 New Lead: ${leadData.name} - ${formatServiceName(leadData.service)}`,
        html: getAdminEmailHTML(leadData)
      });
      console.log('✅ Admin Notification Sent:', adminEmailResponse);
      adminEmailStatus = true;
    } catch (emailErr) {
      console.error('❌ Admin Email Error:', emailErr);
    }

    // 4. Send Email 3: Thank-you Confirmation to Customer
    let userEmailStatus = false;
    try {
      const userEmailResponse = await resend.emails.send({
        from: 'Hanzwell Agency <onboarding@resend.dev>',
        to: [leadData.email],
        replyTo: 'hanzwellagency@gmail.com',
        subject: `Thank you for contacting Hanzwell Agency, ${leadData.name}!`,
        html: getCustomerEmailHTML(leadData)
      });
      console.log('✅ Customer Confirmation Sent:', userEmailResponse);
      userEmailStatus = true;
    } catch (emailErr) {
      console.error('❌ Customer Confirmation Email Error:', emailErr);
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your message has been sent successfully. We will get back to you within 24 hours.',
      leadId: savedLead.id,
      emailsSent: {
        admin: adminEmailStatus,
        user: userEmailStatus
      }
    });

  } catch (error) {
    console.error('API /api/contact Exception:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}
