document.addEventListener('DOMContentLoaded', function () {
    const convertBtn = document.getElementById('convertBtn');
    convertBtn.addEventListener('click', convertTemperature);
});

function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const unitFrom = document.getElementById('unitFrom').value;
    const unitTo = document.getElementById('unitTo').value;

    let result;

    if (unitFrom === 'celsius') {
        if (unitTo === 'fahrenheit') {
            result = (inputTemp * 9/5) + 32;
        } else if (unitTo === 'kelvin') {
            result = inputTemp + 273.15;
        } else {
            result = inputTemp; // Conversion between same units or invalid selections
        }
    } else if (unitFrom === 'fahrenheit') {
        if (unitTo === 'celsius') {
            result = (inputTemp - 32) * 5/9;
        } else if (unitTo === 'kelvin') {
            result = (inputTemp - 32) * 5/9 + 273.15;
        } else {
            result = inputTemp; // Conversion between same units or invalid selections
        }
    } else if (unitFrom === 'kelvin') {
        if (unitTo === 'celsius') {
            result = inputTemp - 273.15;
        } else if (unitTo === 'fahrenheit') {
            result = (inputTemp - 273.15) * 9/5 + 32;
        } else {
            result = inputTemp; // Conversion between same units or invalid selections
        }
    } else {
        result = "Invalid selection";
    }

    document.getElementById('result').textContent = `Result: ${result.toFixed(2)} ${unitTo}`;
}
