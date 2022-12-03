require("../src/data/mongooseConnect0");
const Task = require("../src/models/task");

const deleteTaskAndCount = async (id) => {
  await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("63867f1f1cf7ce3fb8669dc7")
  .then((count) => {
    console.log(count);
  })
  .catch((er) => {
    console.log(er);
  });
