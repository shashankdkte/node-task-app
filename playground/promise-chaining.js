require("../src/data/mongooseConnect0");
const User = require("../src/models/user");

// User.findByIdAndUpdate("63867b63967ac82828ed33d2", { age: 5 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 5 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const updateAgeandCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeandCount("63851b26a5d04f5fec315347", 30)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
