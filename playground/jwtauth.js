const jwt = require("jsonwebtoken");
const muFunction = async () => {
  const token = jwt.sign({ _id: "abc123" }, "secretsecret", {
    expiresIn: "2 days",
  });
    console.log(token);
    
    const data = jwt.verify(token, "secretsecret");
    console.log(data)
};

muFunction()