const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// sgMail.send({
//   to: "shashankdhakate2020@gmail.com",
//   from: "shashankdkte@gmail.com",
//   subject: "This is first email",
//   text: "I hope to get this to you",
// });

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "shashankdkte@gmail.com",
    subject: "Thanks for joining us",
    text: `Welcome to the app. ${name}. Let me know how to get along with the app`,
  });
};

const sendFarewellEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "shashankdkte@gmail.com",
    subject: "Sorry to see you go",
    text: "Could please specify why are you leaving",
  });
};

module.exports = {
  sendWelcomeEmail,
  sendFarewellEmail,
};
