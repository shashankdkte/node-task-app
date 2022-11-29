require("../src/data/mongooseConnect0");
const User = require("../src/models/user");

User.findByIdAndUpdate("63867b63967ac82828ed33d2", { age: 5 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 5 });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
