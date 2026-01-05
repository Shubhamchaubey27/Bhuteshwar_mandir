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
if (empty($data['name']) || empty($data['phone']) || empty($data['serviceType']) || 
    empty($data['rating']) || empty($data['experience'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Required fields are missing']);
    exit();
}

// Sanitize inputs
$name = htmlspecialchars($data['name']);
$phone = htmlspecialchars($data['phone']);
$email = !empty($data['email']) ? filter_var($data['email'], FILTER_SANITIZE_EMAIL) : 'Not provided';
$serviceType = htmlspecialchars($data['serviceType']);
$rating = htmlspecialchars($data['rating']);
$experience = htmlspecialchars($data['experience']);
$suggestions = !empty($data['suggestions']) ? htmlspecialchars($data['suggestions']) : 'कोई सुझाव नहीं';

// Create star rating display
$stars = str_repeat('⭐', intval($rating));

// Email recipient
$to = 'tinkupandit8750@gmail.com';

// Email subject
$email_subject = "नई प्रतिक्रिया: " . $serviceType . " - " . $stars;

// Email content (HTML)
$email_body = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #8B0000 0%, #FF6B35 100%); 
                  color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .header h1 { margin: 0; font-size: 24px; }
        .rating { font-size: 2rem; margin: 10px 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #8B0000; display: block; margin-bottom: 5px; }
        .value { background: white; padding: 10px; border-radius: 5px; border-left: 3px solid #FF6B35; }
        .experience-box { background: white; padding: 15px; border-radius: 5px; 
                         border-left: 3px solid #8B0000; min-height: 80px; }
        .suggestions-box { background: #fff8f0; padding: 15px; border-radius: 5px; 
                          border-left: 3px solid #FFD700; min-height: 60px; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1>🙏 नई प्रतिक्रिया प्राप्त हुई</h1>
            <p style='margin: 10px 0 0 0; opacity: 0.9;'>भूतेश्वर मंदिर - प्रतिक्रिया फॉर्म</p>
            <div class='rating'>{$stars}</div>
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
                <span class='label'>सेवा का प्रकार:</span>
                <div class='value'>{$serviceType}</div>
            </div>
            
            <div class='field'>
                <span class='label'>रेटिंग:</span>
                <div class='value'>{$rating}/5 {$stars}</div>
            </div>
            
            <div class='field'>
                <span class='label'>अनुभव:</span>
                <div class='experience-box'>{$experience}</div>
            </div>
            
            <div class='field'>
                <span class='label'>सुझाव:</span>
                <div class='suggestions-box'>{$suggestions}</div>
            </div>
        </div>
        <div class='footer'>
            <p>यह प्रतिक्रिया भूतेश्वर मंदिर की वेबसाइट के प्रतिक्रिया फॉर्म से भेजी गई है।</p>
            <p>कृपया भक्त को उनकी प्रतिक्रिया के लिए धन्यवाद दें।</p>
        </div>
    </div>
</body>
</html>
";

// Email headers
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: " . ($email !== 'Not provided' ? $email : 'feedback@bhuteshwarmandir.com') . "\r\n";
if ($email !== 'Not provided') {
    $headers .= "Reply-To: " . $email . "\r\n";
}

// Send email
$mail_sent = mail($to, $email_subject, $email_body, $headers);

if ($mail_sent) {
    http_response_code(200);
    echo json_encode([
        'success' => true, 
        'message' => 'आपकी प्रतिक्रिया सफलतापूर्वक भेज दी गई है।'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'प्रतिक्रिया भेजने में समस्या हुई। कृपया फिर से प्रयास करें।'
    ]);
}
?>
