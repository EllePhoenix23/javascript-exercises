const convertToCelsius = function(fahrenheit) {
  const celsiusTemp = (-32 + fahrenheit) / 1.8;
  const roundedCelsiusTemp = Math.round(celsiusTemp * 10) / 10;
  return roundedCelsiusTemp
};

const convertToFahrenheit = function(celsius) {
  const fahrenheitTemp = (celsius * 1.8 + 32);
  const roundedFahrenheitTemp = Math.round(fahrenheitTemp * 10) / 10;
  return roundedFahrenheitTemp
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
