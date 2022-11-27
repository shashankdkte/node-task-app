const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }
    const db = client.db(databaseName);
    console.log("Connection Successful");

    db.collection("tasks").insertMany(
      [
        {
          description: "Play Piano",
          completed: false,
        },
        {
          description: "Play Flute",
          completed: true,
        },
        {
          description: "Iron clothes",
          completed: false,
        },
      ],
      (error, result) => {
        if (error) {
          console.log("Unable to insert documents");
        } else {
          console.log(result.ops);
        }
      }
    );
  }
);
