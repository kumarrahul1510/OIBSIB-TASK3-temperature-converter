function convertTemperature() {
    var temperature = document.getElementById('temperatureInput').value;
    var inputUnit = document.getElementById('inputUnit').value;
    var celsius, fahrenheit, kelvin;

    if (inputUnit === 'celsius') {
        celsius = temperature;
        fahrenheit = (temperature * 9 / 5) + 32;
        kelvin = parseFloat(temperature) + 273.15;
    } else if (inputUnit === 'fahrenheit') {
        celsius = (temperature - 32) * (5 / 9);
        fahrenheit = temperature;
        kelvin = (parseFloat(temperature) + 459.67) * (5 / 9);
    } else if (inputUnit === 'kelvin') {
        celsius = temperature - 273.15;
        fahrenheit = (temperature * 9 / 5) - 459.67;
        kelvin = temperature;
    }

    document.getElementById('resultCelsius').innerText = `Celsius: ${celsius} °C`;
    document.getElementById('resultFahrenheit').innerText = `Fahrenheit: ${fahrenheit} °F`;
    document.getElementById('resultKelvin').innerText = `Kelvin: ${kelvin} K`;
}