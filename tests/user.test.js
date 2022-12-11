const request = require("supertest");
const app = require("../src/app");

test("Should sign up a new user", async () => {
  await request(app)
    .post("/users")
    .send({
      name: "Naruto ",
      email: "shiki1@gmail.com",
      password: "RamenForLife",
    })
    .expect(201);
});
