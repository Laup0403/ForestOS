//Uhr

function updateTime() { document.querySelector("#timeElement").innerHTML = new Date().toLocaleString(); }
setInterval(updateTime, 1000);

//Variablen

var biggestIndex = 1;
var topBar = document.querySelector("#top")
var selectedIcon = undefined
var notescontent = [{
  title: "Welcome",
  date: "04.07.26",
  content: `
    <p contenteditable="True">
    <strong>Welcome to Woodwriter</strong><br>
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
  <p>-a terminal <br><br>
      -games <br><br>
      -a better taskbar <br><br>
      -a file manager <br><br>
      -a browser
  `
},
{
  title: "Secret!",
  date: "06.07.26",
  content: `
    <p contenteditable="True">
    This is very serius:<br>
    I live on Earth
    </p>
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
    screen.style.display = "none"
  })
}

//Fenster öffnen

function openWindow(element) {
  console.log("window opened")
  element.style.display = "inline"
  biggestIndex++;  // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
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

function handleIconTap(element) {
  if (element.classList.contains("selected")) {
    deselectIcon(element)
    openWindow(document.querySelector("#notes"))
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
  var screen = document.querySelector("#" + windowName)
  addWindowTapHandling(screen)
  closeWindow(windowName, windowName + "close")
  dragElement(screen)
}

intializeWindow("notes")
intializeWindow("welcome")

//Notes app

function setNotesContent(index) {

  var notesContent = document.querySelector("#notesContent")

  notesContent.innerHTML = notescontent[index].content
}

setNotesContent(0)

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

for (let i = 0; i < notescontent.length; i++) {
  addToSideBar(i)
}
