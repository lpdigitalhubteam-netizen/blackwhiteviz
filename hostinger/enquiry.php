<?php
/**
 * Hostinger mail relay — upload to public_html/mail/enquiry.php
 * Then set in Vercel:
 *   ENQUIRY_MAIL_URL=https://blackwhiteviz.com/mail/enquiry.php
 *   ENQUIRY_MAIL_SECRET=your-secret-here
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

$secret = 'REPLACE_WITH_A_LONG_RANDOM_SECRET';
$to = 'hello@blackwhiteviz.com';
$from = 'office@blackwhiteviz.com';
$fromName = 'Blackwhite Viz';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$auth = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
if ($auth !== 'Bearer ' . $secret) {
    http_response_code(401);
    echo json_encode(['error' => 'Unauthorized']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON']);
    exit;
}

$subject = trim($data['subject'] ?? '');
$text = trim($data['text'] ?? '');
$replyTo = trim($data['replyTo'] ?? '');

if ($subject === '' || $text === '') {
    http_response_code(400);
    echo json_encode(['error' => 'Missing subject or body']);
    exit;
}

$headers = [
    'MIME-Version: 1.0',
    'Content-type: text/plain; charset=UTF-8',
    'From: ' . $fromName . ' <' . $from . '>',
];

if ($replyTo !== '' && filter_var($replyTo, FILTER_VALIDATE_EMAIL)) {
    $headers[] = 'Reply-To: ' . $replyTo;
}

$sent = mail($to, '=?UTF-8?B?' . base64_encode($subject) . '?=', $text, implode("\r\n", $headers));

if (!$sent) {
    http_response_code(502);
    echo json_encode(['error' => 'Could not send mail']);
    exit;
}

echo json_encode(['ok' => true]);
