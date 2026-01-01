<?php
// Set CORS headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Get JSON data
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Validate required fields
if (empty($data['name']) || empty($data['phone']) || empty($data['email']) || 
    empty($data['subject']) || empty($data['message'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'All fields are required']);
    exit();
}

// Sanitize inputs
$name = htmlspecialchars($data['name']);
$phone = htmlspecialchars($data['phone']);
$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$subject = htmlspecialchars($data['subject']);
$message = htmlspecialchars($data['message']);

// Email recipient
$to = 'tinkupandit8750@gmail.com';

// Email subject
$email_subject = "नई जिज्ञासा: " . $subject;

// Email content (HTML)
$email_body = "
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
                <div class='value'>{$name}</div>
            </div>
            
            <div class='field'>
                <span class='label'>फोन नंबर:</span>
                <div class='value'>{$phone}</div>
            </div>
            
            <div class='field'>
                <span class='label'>ईमेल:</span>
                <div class='value'>{$email}</div>
            </div>
            
            <div class='field'>
                <span class='label'>विषय:</span>
                <div class='value'>{$subject}</div>
            </div>
            
            <div class='field'>
                <span class='label'>संदेश:</span>
                <div class='message-box'>{$message}</div>
            </div>
        </div>
        <div class='footer'>
            <p>यह संदेश भूतेश्वर मंदिर की वेबसाइट के संपर्क फॉर्म से भेजा गया है।</p>
            <p>कृपया जल्द से जल्द उत्तर दें।</p>
        </div>
    </div>
</body>
</html>
";

// Email headers
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: " . $email . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";

// Send email
$mail_sent = mail($to, $email_subject, $email_body, $headers);

if ($mail_sent) {
    http_response_code(200);
    echo json_encode([
        'success' => true, 
        'message' => 'आपका संदेश सफलतापूर्वक भेज दिया गया है।'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'संदेश भेजने में समस्या हुई। कृपया फिर से प्रयास करें।'
    ]);
}
?>
