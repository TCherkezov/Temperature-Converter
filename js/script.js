const degAmount = document.getElementById("degAmount");
const degType = document.getElementById("degType");
const convType = document.getElementById("convType");
const convertBtn = document.querySelector("button");
const degreeResult = document.querySelector(".degree-result");
const convTypeLabel = document.querySelector("h3");

convertBtn.addEventListener("click", function() {

    let degree = parseFloat(degAmount.value);
    let fromType = degType.value;
    let toType = convType.value;
    let result;

    if (fromType == "F" && toType == "C") {
        result = (degree - 32) * (5 / 9);
    } else if (fromType == "F" && toType == "K") {
        result = (degree + 459.67) * (5 / 9);
    } else if (fromType == "C" && toType == "F") {
        result = degree * (9 / 5) + 32;
    } else if (fromType == "C" && toType == "K") {
        result = degree + 273.15;
    } else if (fromType == "K" && toType == "F") {
        result = degree * (9 / 5) - 459.67;
    } else if (fromType == "K" && toType == "C") {
        result = degree - 273.15;
    }

    convTypeLabel.textContent = toType;
    degreeResult.textContent = result;
    degreeResult.textContent = Math.round(result * 10) / 10;
});
  