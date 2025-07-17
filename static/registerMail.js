export const registerMail = ({
  username
}) => {
    return(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Thank You for Registering</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background: linear-gradient(135deg, #667eea, #764ba2);
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      color: #333;
    }

    .email-container {
      max-width: 600px;
      margin: 50px auto;
      background-color: #ffffff;
      border-radius: 15px;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
      overflow: hidden;
    }

    .header {
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      padding: 40px 20px;
      text-align: center;
    }

    .header h1 {
      margin: 0;
      font-size: 30px;
    }

    .content {
      padding: 30px 25px;
      text-align: center;
    }

    .content p {
      font-size: 16px;
      line-height: 1.7;
      margin: 10px 0 20px;
    }

    .features {
      text-align: left;
      margin: 20px auto;
    }

    .features li {
      margin-bottom: 10px;
      font-size: 15px;
      padding-left: 20px;
      position: relative;
    }

    .features li::before {
      content: "✔";
      position: absolute;
      left: 0;
      color: #764ba2;
      font-weight: bold;
    }

    .btn {
      display: inline-block;
      background-color: #764ba2;
      color: white;
      text-decoration: none;
      padding: 12px 25px;
      border-radius: 30px;
      font-weight: bold;
      transition: background 0.3s;
      margin-top: 25px;
    }

    .btn:hover {
      background-color: #5d3a94;
    }

    .footer {
      padding: 20px;
      font-size: 12px;
      color: #777;
      text-align: center;
      background-color: #f5f5f5;
    }

    .socials {
      margin-top: 20px;
    }

    .socials img {
      width: 28px;
      margin: 0 8px;
      vertical-align: middle;
    }

    @media only screen and (max-width: 600px) {
      .email-container {
        margin: 20px;
      }

      .header h1 {
        font-size: 24px;
      }

      .content p,
      .features li {
        font-size: 14px;
      }
    }
  </style>
</head>
<body>

  <div class="email-container">
    <div class="header">
      <h1>Welcome, ${username}! 🎉</h1>
      <p style="margin-top: 10px; font-size: 16px;">We're excited to have you at <strong>Rent-A-Car</strong></p>
    </div>

    <div class="content">
      <p>Thanks for signing up! Whether you're headed on a weekend getaway or need a quick city ride, we’ve got you covered.</p>
      
      <p>Here’s what you can enjoy with us:</p>

      <ul class="features">
        <li>Fast and secure booking process</li>
        <li>Affordable daily and weekly rental rates</li>
        <li>Wide range of cars from economy to luxury</li>
        <li>24/7 customer support for your peace of mind</li>
      </ul>

      <a href="https://yourwebsite.com" class="btn">Explore Available Cars 🚗</a>

      <p style="margin-top: 30px; font-size: 15px;">
        Have any questions? Just reply to this email or reach out to our support team anytime at 
        <a href="mailto:support@rentacar.com" style="color: #764ba2; font-weight: bold;">support@rentacar.com</a>.
      </p>

      <div class="socials">
        <p style="margin-bottom: 10px;">Follow us for deals & updates:</p>
        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Facebook"></a>
        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111425.png" alt="Twitter"></a>
        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111467.png" alt="Instagram"></a>
      </div>
    </div>

    <div class="footer">
      &copy; 2025 Rent-A-Car. All rights reserved.<br/>
      123 Car Street, Kathmandu, Nepal
    </div>
  </div>

</body>
</html>
`)
}