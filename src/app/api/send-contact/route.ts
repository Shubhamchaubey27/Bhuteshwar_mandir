import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();

        // Validate required fields
        if (!data.name || !data.phone || !data.email || !data.subject || !data.message) {
            return NextResponse.json(
                { success: false, message: 'All fields are required' },
                { status: 400 }
            );
        }

        // Sanitize inputs
        const name = String(data.name).trim();
        const phone = String(data.phone).trim();
        const email = String(data.email).trim();
        const subject = String(data.subject).trim();
        const message = String(data.message).trim();

        // Send email using Resend
        try {
            await resend.emails.send({
                from: 'Bhuteshwar Mandir <onboarding@resend.dev>', // You'll update this with your verified domain
                to: ['tinkupandit8750@gmail.com'],
                subject: `नई जिज्ञासा: ${subject}`,
                html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%); 
                  color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .header h1 { margin: 0; font-size: 24px; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #ff6b35; display: block; margin-bottom: 5px; }
        .value { background: white; padding: 10px; border-radius: 5px; border-left: 3px solid #ff6b35; }
        .message-box { background: white; padding: 15px; border-radius: 5px; 
                       border-left: 3px solid #ff6b35; min-height: 100px; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1>🙏 नई जिज्ञासा प्राप्त हुई</h1>
            <p style='margin: 10px 0 0 0; opacity: 0.9;'>भूतेश्वर मंदिर - संपर्क फॉर्म</p>
        </div>
        <div class='content'>
            <div class='field'>
                <span class='label'>नाम:</span>
                <div class='value'>${name}</div>
            </div>
            
            <div class='field'>
                <span class='label'>फोन नंबर:</span>
                <div class='value'>${phone}</div>
            </div>
            
            <div class='field'>
                <span class='label'>ईमेल:</span>
                <div class='value'>${email}</div>
            </div>
            
            <div class='field'>
                <span class='label'>विषय:</span>
                <div class='value'>${subject}</div>
            </div>
            
            <div class='field'>
                <span class='label'>संदेश:</span>
                <div class='message-box'>${message}</div>
            </div>
        </div>
        <div class='footer'>
            <p>यह संदेश भूतेश्वर मंदिर की वेबसाइट के संपर्क फॉर्म से भेजा गया है।</p>
            <p>कृपया जल्द से जल्द उत्तर दें।</p>
        </div>
    </div>
</body>
</html>
                `,
            });

            return NextResponse.json({
                success: true,
                message: 'आपका संदेश सफलतापूर्वक भेज दिया गया है।'
            });
        } catch (emailError) {
            console.error('Email sending error:', emailError);
            // Still return success so user can proceed to WhatsApp
            return NextResponse.json({
                success: true,
                message: 'Form submitted. Redirecting to WhatsApp...'
            });
        }
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { success: false, message: 'An error occurred. Please try again.' },
            { status: 500 }
        );
    }
}
