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
  carImageUrl, // <-- new parameter for image URL
}) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Car Booking Confirmation</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
      }
      .email-container {
        max-width: 600px;
        background: #fff;
        margin: 20px auto;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
      }
      .header {
        background-color: #007bff;
        color: white;
        padding: 15px;
        text-align: center;
        border-radius: 8px 8px 0 0;
      }
      .content {
        padding: 20px;
      }
      .details {
        background-color: #f9f9f9;
        padding: 15px;
        border-radius: 5px;
        margin-top: 10px;
        line-height: 1.6;
      }
      .car-image {
        width: 100%;
        max-height: 250px;
        object-fit: cover;
        border-radius: 5px;
        margin-bottom: 15px;
      }
      .footer {
        text-align: center;
        font-size: 12px;
        color: #888;
        margin-top: 30px;
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <div class="header">
        <h1>Booking Confirmed</h1>
      </div>
      <div class="content">
        <h2>Hi ${username},</h2>
        <p>Thank you for booking with us. Your car booking is confirmed. Below are the details:</p>
        
        ${
          carImageUrl
            ? `<img src="${carImageUrl}" alt="Image of ${carName}" class="car-image" />`
            : ""
        }
        
        <div class="details">
          <strong>Car Name:</strong> ${carName}<br />
          <strong>Brand:</strong> ${carBrand}<br />
          <strong>Model:</strong> ${carModel}<br />
          <strong>Rent Per Day:</strong> $${rentPerDay}<br />
          <strong>Location:</strong> ${location}<br /><br />

          <strong>Booking ID:</strong> ${bookingId}<br />
          <strong>Start Date:</strong> ${new Date(
            startDate
          ).toDateString()}<br />
          <strong>End Date:</strong> ${new Date(endDate).toDateString()}<br />
          <strong>Total Cost:</strong> $${totalCost}
        </div>
        <p>If you have any questions or need help, feel free to contact us.</p>
      </div>
      <div class="footer">
        &copy; 2025 YourCarRental.com — All rights reserved
      </div>
    </div>
  </body>
  </html>
  `;
};
