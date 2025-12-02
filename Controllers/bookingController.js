import Booking from "../Models/bookingModel.js";
import sendEmail from "../Utils/mailer.js";

export const bookService = async (req, res) => {
  try {
    const { service, date } = req.body;
    const booking = new Booking({ user: req.user._id, service, date });
    await booking.save();

    //send mail notification for booking
    const userEmail = req.user.email;
    await sendEmail(
      userEmail,
      "Service Booking Confirmation",
      `Your booking id for service is ${service} is confirmed for ${date}`
    );
    res.status(200).json({ message: "Booking created Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
