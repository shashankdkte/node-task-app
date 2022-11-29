const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const Oruchimaru = new User({
  name: "Oruchimaru",
  age: 58,
});

Oruchimaru.save()
  .then((result) => {
    console.log(Oruchimaru);
  })
  .catch((error) => {
    console.log(error);
  });
