<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get POST data
    $data = json_decode(file_get_contents('php://input'), true);
    
    // Sanitize inputs
    $name = htmlspecialchars($data['name'] ?? '');
    $phone = htmlspecialchars($data['phone'] ?? '');
    $email = htmlspecialchars($data['email'] ?? '');
    $date = htmlspecialchars($data['date'] ?? '');
    $time = htmlspecialchars($data['time'] ?? '');
    $pujaName = htmlspecialchars($data['pujaName'] ?? '');
    $panditName = htmlspecialchars($data['panditName'] ?? '');
    $address = htmlspecialchars($data['address'] ?? '');
    $specialRequirements = htmlspecialchars($data['specialRequirements'] ?? 'None');
    
    // Email settings
    $to = 'tinkupandit8750@gmail.com';
    $subject = 'New Puja Booking Request - ' . $pujaName;
    
    // Email body
    $message = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #FF6B35, #FF9933); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
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
                    <span class='label'>Name:</span> $name
                </div>
                <div class='info-row'>
                    <span class='label'>Phone:</span> $phone
                </div>
                <div class='info-row'>
                    <span class='label'>Email:</span> $email
                </div>
                <div class='info-row'>
                    <span class='label'>Puja Type:</span> $pujaName
                </div>
                <div class='info-row'>
                    <span class='label'>Selected Pandit:</span> $panditName
                </div>
                <div class='info-row'>
                    <span class='label'>Date:</span> $date
                </div>
                <div class='info-row'>
                    <span class='label'>Time:</span> $time
                </div>
                <div class='info-row'>
                    <span class='label'>Address:</span><br>$address
                </div>
                <div class='info-row'>
                    <span class='label'>Special Requirements:</span><br>$specialRequirements
                </div>
            </div>
            <div class='footer'>
                <p>This is an automated email from Bhuteshwar Mandir booking system</p>
                <p>Please contact the customer as soon as possible to confirm the booking</p>
            </div>
        </div>
    </body>
    </html>
    ";
    
    // Email headers
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: Bhuteshwar Mandir <noreply@bhuteshwarmandir.com>" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";
    
    // Send email
    $emailSent = mail($to, $subject, $message, $headers);
    
    if ($emailSent) {
        echo json_encode([
            'success' => true,
            'message' => 'Booking request sent successfully!'
        ]);
    } else {
        echo json_encode([
            'success' => false,
            'message' => 'Failed to send email. Please try again.'
        ]);
    }
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Invalid request method'
    ]);
}
?>
