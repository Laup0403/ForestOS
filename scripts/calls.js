var currentNumber = "‎ "

function addNumber(number) {
  if (currentNumber == "‎ ") {
    currentNumber = "";
  };

  currentNumber = currentNumber + number;

  if (currentNumber.length >= 6) {
    clearNumber();
    currentNumber = "";
    currentNumber = currentNumber + number;
  }

  checkNumber()

  showNumber()
};

function clearNumber() {
  currentNumber = "‎ "
  showNumber()
};

function showNumber() {
  callDisplay = document.createElement("div");
  callDisplay.innerHTML = `<p>${currentNumber}</p>`;
  var callNumber = document.querySelector("#callNumber");
  callNumber.innerHTML = "";
  callNumber.appendChild(callDisplay);
  console.log(currentNumber);
};
showNumber();

function checkNumber() {
  switch (currentNumber) {
    case "11239":
      console.log("wildschwein angerufen");
      boarAudio = document.getElementById("boarAudio");
      boarAudio.play();
      break;

    case "98273":
      console.log("igel angerufen");
      hedgehogAudio = document.getElementById("hedgehogAudio");
      hedgehogAudio.play();
      break;

    case "48270":
      console.log("eichhörnchen angerufen");
      squirrelAudio = document.getElementById("squirrelAudio");
      squirrelAudio.play();
      break;

    case "38198":
      console.log("fuchs angerufen");
      foxAudio = document.getElementById("foxAudio");
      foxAudio.play();
      break;

    case "24955":
      console.log("wolf angerufen");
      wolfAudio = document.getElementById("wolfAudio");
      wolfAudio.play();
      break;

    case "11111":
      console.log("callcenter angerufen");
      callcenterAudio = document.getElementById("callcenterAudio");
      callcenterAudio.play();
      break;

    case "29312":
      console.log("hirsch angerufen");
      deerAudio = document.getElementById("deerAudio");
      deerAudio.play();
      break;

    case "12345":
      console.log("john pork angerufen");
      johnporkVideo = document.getElementById("johnporkVideo");
      johnporkScreen = document.getElementById("johnpork")
      johnporkScreen.style.display = "flex";
      johnporkVideo.play();
      johnporkVideo.addEventListener('ended', function () {
        johnporkScreen.style.display = "none";
      })
    break;

  }
}
