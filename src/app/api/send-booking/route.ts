import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();

        // Validate required fields
        if (!data.name || !data.phone || !data.email || !data.date ||
            !data.time || !data.pujaName || !data.address) {
            return NextResponse.json(
                { success: false, message: 'All required fields must be filled' },
                { status: 400 }
            );
        }

        // Sanitize inputs
        const name = String(data.name).trim();
        const phone = String(data.phone).trim();
        const email = String(data.email).trim();
        const date = String(data.date).trim();
        const time = String(data.time).trim();
        const pujaName = String(data.pujaName).trim();
        const panditName = String(data.panditName || 'Not selected').trim();
        const address = String(data.address).trim();
        const specialRequirements = String(data.specialRequirements || 'None').trim();

        // Send email using Resend
        try {
            await resend.emails.send({
                from: 'Bhuteshwar Mandir <onboarding@resend.dev>', // You'll update this with your verified domain
                to: ['tinkupandit8750@gmail.com'],
                subject: `New Puja Booking Request - ${pujaName}`,
                html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #FF6B35, #FF9933); color: white; 
                  padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #fff; padding: 30px; border: 1px solid #ddd; border-radius: 0 0 10px 10px; }
        .info-row { margin: 15px 0; padding: 10px; background: #f9f9f9; border-left: 4px solid #FF6B35; }
        .label { font-weight: bold; color: #8B0000; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>🕉️ New Puja Booking Request</h2>
            <p>श्री भूतेश्वर मंदिर</p>
        </div>
        <div class='content'>
            <div class='info-row'>
                <span class='label'>Name:</span> ${name}
            </div>
            <div class='info-row'>
                <span class='label'>Phone:</span> ${phone}
            </div>
            <div class='info-row'>
                <span class='label'>Email:</span> ${email}
            </div>
            <div class='info-row'>
                <span class='label'>Puja Type:</span> ${pujaName}
            </div>
            <div class='info-row'>
                <span class='label'>Selected Pandit Ji:</span> ${panditName}
            </div>
            <div class='info-row'>
                <span class='label'>Date:</span> ${date}
            </div>
            <div class='info-row'>
                <span class='label'>Time:</span> ${time}
            </div>
            <div class='info-row'>
                <span class='label'>Address:</span><br>${address}
            </div>
            <div class='info-row'>
                <span class='label'>Special Requirements:</span><br>${specialRequirements}
            </div>
        </div>
        <div class='footer'>
            <p>This is an automated email from Bhuteshwar Mandir booking system</p>
            <p>Please contact the customer as soon as possible to confirm the booking</p>
        </div>
    </div>
</body>
</html>
                `,
            });

            return NextResponse.json({
                success: true,
                message: 'Booking request sent successfully!'
            });
        } catch (emailError) {
            console.error('Email sending error:', emailError);
            // Still return success so user can proceed to WhatsApp
            return NextResponse.json({
                success: true,
                message: 'Booking submitted. Redirecting to WhatsApp...'
            });
        }
    } catch (error) {
        console.error('Booking form error:', error);
        return NextResponse.json(
            { success: false, message: 'An error occurred. Please try again.' },
            { status: 500 }
        );
    }
}
