const bcrypt = require("bcryptjs");

const myFunction = async () => {
  const password = "Shashank";
  const hashedPassword = await bcrypt.hash(password, 8);

  console.log(password);
  console.log(hashedPassword);

  const isMatch = await bcrypt.compare("Shashank", hashedPassword);
  console.log(isMatch);
};

myFunction();
