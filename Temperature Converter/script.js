// Get the input elements and result element
const tempDegreeInput = document.getElementById('temp-degree');
const selectOption = document.getElementById('select-option');
const selectConvert = document.getElementById('select-convert');
const resultInput = document.getElementById('result');

// Add event listener to the convert button
const convertBtn = document.getElementById('convert-btn');
convertBtn.addEventListener('click', convertTemperature);

// Function to convert temperature
function convertTemperature() {
  const temperature = parseFloat(tempDegreeInput.value);
  const fromUnit = selectOption.value;
  const toUnit = selectConvert.value;

  let convertedTemp;

  if (fromUnit === 'C') {
    if (toUnit === 'C') {
      convertedTemp = temperature;
    } else if (toUnit === 'F') {
      convertedTemp = (temperature * 9 / 5) + 32;
    } else if (toUnit === 'K') {
      convertedTemp = temperature + 273.15;
    }
  } else if (fromUnit === 'F') {
    if (toUnit === 'C') {
      convertedTemp = (temperature - 32) * 5 / 9;
    } else if (toUnit === 'F') {
      convertedTemp = temperature;
    } else if (toUnit === 'K') {
      convertedTemp = (temperature + 459.67) * 5 / 9;
    }
  } else if (fromUnit === 'K') {
    if (toUnit === 'C') {
      convertedTemp = temperature - 273.15;
    } else if (toUnit === 'F') {
      convertedTemp = (temperature * 9 / 5) - 459.67;
    } else if (toUnit === 'K') {
      convertedTemp = temperature;
    }
  }

  resultInput.value = convertedTemp.toFixed(2);
}

// Reset button event listener
const resetButton = document.querySelector('.reset button');
resetButton.addEventListener('click', resetConverter);

// Function to reset the converter
function resetConverter() {
  tempDegreeInput.value = '';
  selectOption.value = 'C';
  selectConvert.value = 'C';
  resultInput.value = '';
}
