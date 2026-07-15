//////////////////////////////////
// Hier müssen die window namen //
//////////////////////////////////

intializeWindow("notes")
intializeWindow("welcome")
intializeWindow("calls")
intializeWindow("term")

//Variablen

var biggestIndex = 1;
var topBar = document.querySelector("#top")
var selectedIcon = undefined
var currentNumber = "‎ "
var numbers = {
  term: 0,
  notes: 0,
}
var notescontent = [
  {
  title: "Welcome",
  date: "04.07.26",
  content: `
    <p contenteditable="True">
    <strong>Welcome to Nutnotes</strong><br>
    <br>
    This is an app where i put my<i> literary gems</i><br>
    <br>
    I can even write <i> different Textstyles</i>, <br>
    like a poem:
    </p>
    <blockquote>
        <strong>The Cow</strong><br>
        <small>Laupi_oida</small> <br>
        I was on a field<br>
        and there was a cow<br>
        that mowed the lawn<br>
        <br>
        then i came near<br>
        and it mowed my hair<br>
        now im bald<br>
        <br>
        The End<br>
    </blockquote>
  `
},
{
  title: "Future Plans",
  date: "06.07.26",
  content: `
  <h2> Future plans:</h2>
  <p>-be happy in the forest<br><br>
  -code in the forest<br><br>
  -live in the forest<br><br>
  -find a river in the forest<p>
  `
},
{
  title: "Secret!",
  date: "06.07.26",
  content: `
    <p contenteditable="True">
    This is very serius:<br>
    never call the 12345    </p>
    `
}
]

//Fenster verschiebbar machen

function dragElement(element) {
  // Step 2: Set up variables to keep track of the element's position.
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  // Step 3: Check if there is a special header element associated with the draggable element.
  if (document.getElementById(element.id + "header")) {
    // Step 4: If present, assign the `dragMouseDown` function to the header's `onmousedown` event.
    // This allows you to drag the window around by its header.
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    // Step 5: If not present, assign the function directly to the draggable element's `onmousedown` event.
    // This allows you to drag the window by holding down anywhere on the window.
    element.onmousedown = startDragging;
  }

  // Step 6: Define the `startDragging` function to capture the initial mouse position and set up event listeners.
  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 7: Get the mouse cursor position at startup.
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 8: Set up event listeners for mouse movement (`elementDrag`) and mouse button release (`closeDragElement`).
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  // Step 9: Define the `elementDrag` function to calculate the new position of the element based on mouse movement.
  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 10: Calculate the new cursor position.
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 11: Update the element's new position by modifying its `top` and `left` CSS properties.
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  // Step 12: Define the `stopDragging` function to stop tracking mouse movement by removing the event listeners.
  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

//Fenster schließen

function closeWindow(window, closebutton) {
  var screen = document.querySelector("#" + window)
  var screenClose = document.querySelector("#" + closebutton)
  screenClose.addEventListener("click", function () {
    screen.remove()
  })
}

//Fenster öffnen

//function openWindow(element) {
  //console.log("window opened")
  //element.style.display = "inline"
  //biggestIndex++;  // Increment biggestIndex by 1
  //element.style.zIndex = biggestIndex;
  //topBar.style.zIndex = biggestIndex + 1;
  //}

function openWindow(name) {
  var body = document.querySelector("#body");
  var newWindow = document.createElement("div");
  numbers[name] += 1;
  switch (name) {
    case 'term':
      newWindow.innerHTML = `<div id="term_${numbers.term}" class="window" style="width: 600px; display: inline;">

      <div class="headerbutton" id = "termheader_${numbers.term}" style="display: flex; width: 100%; padding-bottom: 3px;">
          <div class="close-button" id="termclose_${numbers.term}" style="margin-right: 10px;">✖</div>
         ForestBreaker
      </div>

      <div id="termScreen_${numbers.term}" style="margin: 6px; background-color: mediumseagreen; border-radius: 20px; padding: 5px; height: 500px; overflow-y: scroll; padding: 10px;">
          <div id="termOutput_${numbers.term}"> ForestBreaker - the crazy cool terminal<br>‎  </div>
          <div>
              <span><strong>user@ForestOS></bt></strong> </span>
              <input type="text" id="termInput_${numbers.term}" autofocus autocomplete="off" style="background-color: mediumseagreen; border: none; outline: none; color: darkslategrey; font-size: 14px;">
          </div>
      </div>
      </div>`;
      body.appendChild(newWindow);
      if (numbers.term <= 1) checkPromt(document.querySelector("termInput_"+numbers.term));
      break;
    case 'notes':
      newWindow.innerHTML = `<div class="window" id="notes_${numbers.notes}" style="display: inline; width: fit-content; color: black;">

          <div class="headerbutton" id = "notesheader_${numbers.notes}" style="display: flex; width: 100%; padding-bottom: 3px;">
              <div class="closebutton" id="notesclose_${numbers.notes}" style="margin-right: 10px;">✖</div>
              Nutnotes
              </div>

          <div style="background-color: mediumseagreen;
              margin: 6px; border-radius: 12px; width: 520px; height: 480px; padding: 16px; font-family: sans-serif; display: flex;">
              <div style="display: flex; background-color: blue;"> </div>

              <div id="notessidebar" style="cursor: pointer; background-color: springgreen; width: 720px; margin-right: 10px; padding: 16px; border-radius: 16px; width: fit-content;"></div>

              <div id="notesContent" style="overflow-y: scroll;">
              </div>
          </div>
    </div>`
      body.appendChild(newWindow);
      setNotesContent(0)
      for (let i = 0; i < notescontent.length; i++) {
        addToSideBar(i)
      }
      break;
  };
  addWindowTapHandling(document.querySelector("#" + name + "_" + numbers[name]))
  dragElement(document.querySelector("#" + name + "_" + numbers[name]));
  closeWindow(name + "_" + numbers[name], name + "close_" + numbers[name])
}

function selectIcon(element) {
  element.classList.add("selected");
  selectedIcon = element
}

function deselectIcon(element) {
  if (!element) {
     return;
   }
  element.classList.remove("selected");
  selectedIcon = undefined
}

function handleIconTap(element, screen) {
  if (element.classList.contains("selected")) {
    deselectIcon(element)
    openWindow(screen)
  } else {
    selectIcon(element)
  }
}

//Fenster nach oben kommen lassen

function addWindowTapHandling(element) {
  element.addEventListener("mousedown", () =>
    handleWindowTap(element)
  )
}

function handleWindowTap(element) {
  biggestIndex++;  // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
  deselectIcon(selectedIcon)
}

//alles auf einmal initialisieren

function intializeWindow(windowName) {
  //var screen = document.querySelector("#" + windowName);
  //addWindowTapHandling(screen);
  //closeWindow(windowName, windowName + "close");
  //dragElement(screen);

  var icon = document.querySelector("#" + windowName + "Icon")
  if (icon != null) {
    icon.addEventListener("click", () => handleIconTap(icon, windowName))
  }
}


//Notes app

function setNotesContent(index) {

  var notesContent = document.querySelector("#notesContent")

  notesContent.innerHTML = notescontent[index].content
}

function addToSideBar(index) {
  var sidebar= document.querySelector("#notessidebar");
  var note = notescontent[index];
  newDiv = document.createElement("div");
  newDiv.innerHTML = `
    <p style="margin: 0px;">${note.title}</p>
    <p style="font-size: 12px; margin: 0px;">${note.date}</p>
  `
  newDiv.addEventListener("click", function () {
    setNotesContent(index);
  });
  sidebar.appendChild(newDiv)
}


//Uhr

function updateTime() { document.querySelector("#timeElement").innerHTML = new Date().toLocaleString(); }
setInterval(updateTime, 1000);

//Phoneapp

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
  if (currentNumber == "11239") {
    console.log("wildschwein angerufen");
    boarAudio = document.getElementById("boarAudio");
    boarAudio.play();
  }

  if (currentNumber == "98273") {
    console.log("igel angerufen");
    hedgehogAudio = document.getElementById("hedgehogAudio");
    hedgehogAudio.play();
  }

  if (currentNumber == "48270") {
    console.log("eichhörnchen angerufen");
    squirrelAudio = document.getElementById("squirrelAudio");
    squirrelAudio.play();
  }

  if (currentNumber == "38198") {
    console.log("fuchs angerufen");
    foxAudio = document.getElementById("foxAudio");
    foxAudio.play();
  }

  if (currentNumber == "24955") {
    console.log("wolf angerufen");
    wolfAudio = document.getElementById("wolfAudio");
    wolfAudio.play();
  }

  if (currentNumber == "11111") {
    console.log("callcenter angerufen");
    callcenterAudio = document.getElementById("callcenterAudio");
    callcenterAudio.play();
  };

  if (currentNumber == "29312") {
    console.log("hirsch angerufen");
    deerAudio = document.getElementById("deerAudio");
    deerAudio.play();
  }

  if (currentNumber == "12345") {
    console.log("john pork angerufen");
    johnporkVideo = document.getElementById("johnporkVideo");
    johnporkScreen = document.getElementById("johnpork")
    johnporkScreen.style.display = "flex";
    johnporkVideo.play();
    johnporkVideo.addEventListener('ended', function () {
      johnporkScreen.style.display = "none";
    })

  }
}

// term
function checkPromt(inputScreen) {

  inputScreen.addEventListener('keydown', function (keyDown) {
    if (keyDown.key == 'Enter') {
      var commandLine = inputScreen.value.trim();
      if (commandLine !== '' ) {
        handlePromt(commandLine);
        inputScreen.value = '';
      }
    }
  })
};

function handlePromt(line) {

  var outputScreen = document.querySelector("#termOutput" + numbers.term)

  printToTerminal(`<span class="prompt"><strong>user@ForestOS:</strong> </span> ${line}`);
  var parts = line.split(' ');
  var command = parts[0];
  var args = parts.slice(1);

  //Hier müssen neue Commands hin

  switch (command) {
    case 'help':
      printToTerminal('Available commands:<br> help, clear, echo, forestfetch, matrix,nutnotes,thincanphone,welcome,coolgame,whoIsTheBestProgrammer<br>more infos available at <a href="https://github.com/Laup0403/LaupiOS">https://github.com/Laup0403/LaupiOS</a>');
      break;
    case 'clear':
      outputScreen.innerHTML = '';
      break;
    case 'echo':
      printToTerminal(args.join(' '));
      break;
    case 'forestfetch':
      printToTerminal('<b>OS:</b> ForestOS 1.1<br><b>Shell:</b> bark<br><b>User:</b> user<br><b>CPU: </b>Intel Ryzen 5500<br><b>GPU: </b>Lidl Geforce Intergrated');
      break;
    case 'nutnotes':
      openWindow(document.querySelector("#notes"));
      break;
    case 'thincanphone':
      openWindow(document.querySelector("#calls"));
      break;
    case 'welcome':
      openWindow(document.querySelector("#welcome"));
      break;
    case 'coolgame':
      printToTerminal('Comming soon');
      break;
    case 'whoIsTheBestProgrammer':
      printToTerminal('Of course Laupi_oida.');
      break;
    default:
      printToTerminal(`bark: command not found: ${command}`);
  }
};

function printToTerminal(text) {
  var outputScreen = document.querySelector("#termOutput" + numbers.term)
  var  newtext = document.createElement('p');
  newtext.innerHTML = text;
  outputScreen.appendChild(newtext);

  const windowScreen = document.querySelector("#termScreen");
  windowScreen.scrollTop = windowScreen.scrollHeight;
};
