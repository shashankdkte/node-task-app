const calculateTip = (amount, tipPercent = 0.25) => {
  const tip = amount * tipPercent;
  return amount + tip;
};

const fahrenheittoCelsius = (temp) => {
  return ((temp - 32) * 4) / 9;
};

const celsiustoFahrenheit = (temp) => {
  return temp * 1.8 + 32;
};

const add = (num1, num2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num1 < 0 || num2 < 0) {
        return reject("Something went wrong");
      }
      resolve(num1 + num2);
    }, 500);
  });
};
module.exports = {
  calculateTip,
  fahrenheittoCelsius,
  celsiustoFahrenheit,
  add,
};
