
function generateRandomnumber() {
    var minNumber = document.getElementById("minNumber").value;
    var maxNumber = document.getElementById("maxNumber").value;
    var randomNumber = Math.floor((Math.random() * maxNumber) + minNumber);

    document.getElementById("resultRandom").innerHTML = randomNumber;
}