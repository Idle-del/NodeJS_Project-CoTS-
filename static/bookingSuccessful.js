export const bookingSuccessful = ({
  username,
  carName,
  carBrand,
  carModel,
  rentPerDay,
  location,
  startDate,
  endDate,
  totalCost,
  bookingId,
  carImageUrl,
}) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Booking Confirmation</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        background: #f3f4f6;
        font-family: 'Segoe UI', Tahoma, sans-serif;
        color: #333;
      }
      .email-container {
        max-width: 600px;
        margin: 40px auto;
        background-color: #ffffff;
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
      }
      .header {
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        padding: 30px 20px;
        text-align: center;
      }
      .header h1 {
        margin: 0;
        font-size: 28px;
      }
      .content {
        padding: 30px 25px;
      }
      .content h2 {
        margin-top: 0;
        font-size: 22px;
        color: #764ba2;
      }
      .car-image {
        width: 100%;
        height: auto;
        max-height: 250px;
        object-fit: cover;
        border-radius: 10px;
        margin: 20px 0;
      }
      .details-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
        margin-top: 10px;
      }
      .details-item {
        background-color: #f8f8f8;
        padding: 12px 16px;
        border-radius: 8px;
        font-size: 15px;
        word-wrap: break-word;
      }
      .details-item strong {
        display: block;
        color: #555;
        margin-bottom: 5px;
      }
      .footer {
        padding: 20px;
        font-size: 13px;
        text-align: center;
        color: #777;
        background-color: #f5f5f5;
      }
      .footer a {
        color: #764ba2;
        text-decoration: none;
        font-weight: bold;
      }

      /* Mobile responsive */
      @media only screen and (max-width: 500px) {
        .details-grid {
          grid-template-columns: 1fr;
        }
        .header h1 {
          font-size: 22px;
        }
        .content h2 {
          font-size: 18px;
        }
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <div class="header">
        <h1>Your Booking is Confirmed! 🎉</h1>
      </div>
      <div class="content">
        <h2>Hi ${username},</h2>
        <p>Thanks for choosing <strong>Rent-A-Car</strong>! Your booking has been confirmed and your ride will be ready as scheduled.</p>

        ${carImageUrl ? `
          <img 
            src="${carImageUrl}" 
            alt="Image of ${carName}" 
            class="car-image"
            style="display: block; max-width: 100%; height: auto;"
          />
          <p style="color: #888; font-size: 12px; text-align: center; padding: 5px 0;">
            Can't see the car? <a href="${carImageUrl}" style="color: #764ba2;">View it online</a>
          </p>
        ` : ''}

        <div class="details-grid">
          <div class="details-item">
            <strong>Car Name</strong>
            ${carName}
          </div>
          <div class="details-item">
            <strong>Brand</strong>
            ${carBrand}
          </div>
          <div class="details-item">
            <strong>Model</strong>
            ${carModel}
          </div>
          <div class="details-item">
            <strong>Rent Per Day</strong>
            $${rentPerDay}
          </div>
          <div class="details-item">
            <strong>Location</strong>
            ${location}
          </div>
          <div class="details-item">
            <strong>Booking ID</strong>
            ${bookingId}
          </div>
          <div class="details-item">
            <strong>Start Date</strong>
            ${new Date(startDate).toDateString()}
          </div>
          <div class="details-item">
            <strong>End Date</strong>
            ${new Date(endDate).toDateString()}
          </div>
          <div class="details-item" style="grid-column: span 2;">
            <strong>Total Cost</strong>
            $${totalCost}
          </div>
        </div>

        <p style="margin-top: 25px;">
          If you have any questions or need help, just reply to this email or reach us at
          <a href="mailto:support@rentacar.com">support@rentacar.com</a>.
        </p>
      </div>
      <div class="footer">
        &copy; 2025 Rent-A-Car &mdash; All rights reserved<br/>
        Follow us on 
        <a href="#">Facebook</a>, 
        <a href="#">Twitter</a>, 
        <a href="#">Instagram</a>
      </div>
    </div>
  </body>
  </html>
  `;
};
