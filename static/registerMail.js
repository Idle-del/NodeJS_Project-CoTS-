export const registerMail = () => {
    return(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Thank You!</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background: linear-gradient(135deg, #667eea, #764ba2);
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .thankyou-container {
      background: rgba(255, 255, 255, 0.1);
      padding: 40px;
      border-radius: 20px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
      text-align: center;
      backdrop-filter: blur(8px);
      max-width: 500px;
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 20px;
    }

    p {
      font-size: 1.1rem;
      margin-bottom: 25px;
      line-height: 1.6;
    }

    .btn-home {
      text-decoration: none;
      background-color: #fff;
      color: #764ba2;
      padding: 12px 24px;
      border-radius: 30px;
      font-weight: bold;
      transition: all 0.3s ease;
    }

    .btn-home:hover {
      background-color: #f1f1f1;
    }
  </style>
</head>
<body>
  <div class="thankyou-container">
    <h1>Thank You for Registering!</h1>
    <p>Welcome to <strong>Rent-A-Car</strong> – your go-to platform for finding the perfect ride anytime, anywhere.</p>
    <p>We’re excited to have you on board! Start exploring a wide range of cars available for rent at affordable prices.</p>
    <a href="/" class="btn-home">Explore Cars</a>
  </div>
</body>
</html>
`)
}