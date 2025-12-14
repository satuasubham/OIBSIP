document.getElementById("convertBtn").addEventListener("click", function () {
  const tempInput = document.getElementById("temperature").value.trim();
  const from = document.getElementById("fromUnit").value;
  const to = document.getElementById("toUnit").value;
  const resultBox = document.getElementById("result");

  if (tempInput === "" || isNaN(tempInput)) {
    resultBox.innerHTML = " Please enter a valid number.";
    resultBox.style.color = "#ff4c4c";
    return;
  }

  const value = parseFloat(tempInput);
  let celsius;

  switch (from) {
    case "C":
      celsius = value;
      break;
    case "F":
      celsius = (value - 32) * 5 / 9;
      break;
    case "K":
      celsius = value - 273.15;
      break;
  }

  let finalValue;

  switch (to) {
    case "C":
      finalValue = celsius;
      break;
    case "F":
      finalValue = (celsius * 9 / 5) + 32;
      break;
    case "K":
      finalValue = celsius + 273.15;
      break;
  }

  resultBox.style.color = "#00ffcc";
  resultBox.innerHTML = `Converted Temperature: ${finalValue.toFixed(2)} °${to}`;
});
