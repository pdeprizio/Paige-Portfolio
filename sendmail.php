if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (
        !empty($_POST['name'])
        && !empty($_POST['email'])
        && !empty($_POST['message'])
    ) {
        // Form data
        $name = $_POST["name"];
        $email = $_POST["email"];
        $phone = $_POST["phone"];
        $message = $_POST["message"];

        // Email parameters
        $to = "depriziopaige@gmail.com";
        $subject = "Yay! New Contact Form Submission";
        $body = "Name: {$name}\nEmail: {$email}\nPhone: {$phone}\nMessage: {$message}";
        $headers = "From: {$email}";

        // Check reCAPTCHA
        $recaptcha_secret = "6LeOUxgoAAAAAJcJa6PexmKyVKekry56LTAWfJco";
        $recaptcha_response = $_POST["g-recaptcha-response"];
        $url = "https://www.google.com/recaptcha/api/siteverify?secret=$recaptcha_secret&response=$recaptcha_response";
        $response = file_get_contents($url);
        $response_data = json_decode($response, true);

        if ($response_data["success"]) {
            // reCAPTCHA validation passed, send email
            if (mail($to, $subject, $body, $headers)) {
                // Email sending was successful. You can add additional code here.
                // For example, you can send a confirmation message to the user or perform other actions.
                echo "Message sent successfully!";
            } else {
                echo "Failed to send message.";
            }
        } else {
            echo "reCAPTCHA validation failed. Please complete the reCAPTCHA challenge.";
        }
    }
}
