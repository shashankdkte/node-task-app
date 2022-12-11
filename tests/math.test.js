// test("Hello World", () => {});
const {
  calculateTip,
  fahrenheittoCelsius,
  celsiustoFahrenheit,
  add,
} = require("../math");

// test("this should fail", () => {
//   throw new Error("Failure");
// });

test("Should calculate tip", () => {
  const total = calculateTip(10, 0.3);
  expect(total).toBe(13);
  //   if (total !== 13) {
  //     throw new Error("Total tip should be 13 got " + total);
  //   }
});
test("Should calculate tip", () => {
  const total = calculateTip(10);
  expect(total).toBe(12.5);
});

test("Should convert 32F to 0C", () => {
  const celcius = fahrenheittoCelsius(32);
  expect(celcius).toBe(0);
});

test("Should convert 0C to 32F", () => {
  const fahrenheit = celsiustoFahrenheit(0);
  expect(fahrenheit).toBe(32);
});

// test("Async test", (done) => {
//   setTimeout(() => {
//     expect(1).toBe(1);
//     done();
//   }, 2000);
// });

test("Should add to number", (done) => {
  add(2, 3).then((sum) => {
    expect(sum).toBe(5);
    done();
  });
});

test("Should add to number", async () => {
  const sum = await add(2, 3);
  expect(sum).toBe(5);
});
