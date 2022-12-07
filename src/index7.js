const express = require("express");

require("./data/mongooseConnect0");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);
app.listen(port, () => {
  console.log("Server is up on port " + port);
});

// const Task = require("./models/task");
// const User = require("./models/user");
// const main = async () => {
//   // const task = await Task.findById("638cb942fe02f94fd0321a89");
//   // await task.populate("owner").execPopulate();
//   // console.log(task.owner);

// const user = await User.findById("638cb8a653af6b1f68c18e36");
// await user.populate("tasks").execPopulate();
// console.log(user.tasks);
// };
// main();
