
function generateRandomnumber() {
    var minNumber = parseInt(document.getElementById("minNumber").value);
    var maxNumber = parseInt(document.getElementById("maxNumber").value);
    var randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

    document.getElementById("resultRandom").innerHTML = randomNumber;
}

document.getElementById("generateBtn").addEventListener("click", function () { generateRandomnumber(); });
