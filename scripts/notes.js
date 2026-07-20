var notescontent = [
  {
  title: "dairy entry 1",
  date: "15.07.1995",
  content: `
    <p>
    <strong>What is this place?</strong><br>
    <br>
    I don't know where I am.<br>
    I just know I was in the forest and<br>
    then something hit me.<br><br>
    I will keep a diary to not go crazy.<br>
    This place seems like an operating system,<br>
    but I'm not quiete sure.
    </p>
  `
},
{
  title: "diary entry 2",
  date: "16.07.1995",
  content: `
  <p>
    I've looked around here and<br>
    I found out about some place called Terminal,<br>
    but I have no clue how to get there.<br>
  </p>
  `
},
{
  title: "diary entry 5",
  date: "26.07.1995",
  content: `
    <p>
      I've found some old book.<br>
      This is the whole content:
    </p>
    <blockquote>
      if something watches you do not look away<br>
      if something watches you DO NOT look away<br>
      if something watches you DO NOT LOOK AWAY<br>
      IF SOMETHING WATCHES YOU DO NOT LOOK AWAY<br>
      IF SOMETHING WATCHES YOU DO NOT LOOK AWAY<br>
      <b>IF SOMETHING WATCHES YOU DO NOT LOOK AWAY</b><br>
      <b>IF SOMETHING WATCHES YOU DO NOT LOOK AWAY</b><br>
      <b>IF SOMETHING WATCHES YOU DO NOT LOOK AWAY</b><br>
      <b>IF SOMETHING WATCHES YOU DO NOT LOOK AWAY</b><br>
    </blockquote>
    <p>
      14568 Sites full of this sentence.<br>
      This number also looks very suspicious,<br>
      but idk why.
    </p>
    `
  },
  {
    title: "diary entry 125",
    date: "10.04.2007",
    content: `
      <p>
        It's coming<br>
        The darkwoods is the only escape now<br>
        It's the only safe place now.<br>
        If you read this <b>GO FIND THE DARKWOODS<br>
        I REPEAT: GO FIND THE DARKWOODS</b> before it is too late...
      </p>
      `
  },
  {
    title: "diary entry 126",
    date: "10.04.2007",
    content: `
      <p onclick='openWindow(document.querySelector("#term"));document.querySelector("#termIcon").style.display = "flex";' style="display: flex; width: 100%;cursor:crosshair;">
      01011001<br>01101111<br>01110101<br>00100000<br>01100001<br>01110010<br>01100101<br>00100000<br>01101110<br>01101111<br>01110100<br>00100000<br>01110111<br>01100101<br>01101100<br>01100011<br>01101111<br>01101101<br>01100101<br>00101110<br>00100000<br>01010111<br>01100101<br>00100000<br>01110111<br>01101001<br>01101100<br>01101100<br>00100000<br>01100010<br>01100101<br>00100000<br>01110111<br>01100001<br>01110100<br>01100011<br>01101000<br>01101001<br>01101110<br>01100111<br>00100000<br>01111001<br>01101111<br>01110101<br>00101110<br>
      </p>
      `
  },
]

function setNotesContent(index) {

  var notesContent = document.querySelector("#notesContent")

  notesContent.innerHTML = notescontent[index].content
}

setNotesContent(0)

function addToSideBar(index) {
  var sidebar= document.querySelector("#notessidebar");
  var note = notescontent[index];
  newDiv = document.createElement("div");
  newDiv.classList = "sidebarcontent";
  newDiv.innerHTML = `
    <p style="margin: 0px;">${note.title}</p>
    <p style="font-size: 12px; margin: 0px;">${note.date}</p>
  `
  newDiv.addEventListener("click", function () {
    setNotesContent(index);
    //if(index == 4){openWindow(document.querySelector("#term"));document.querySelector("#termIcon").style.display = "flex";};
    });
  sidebar.appendChild(newDiv)
}

for (let i = 0; i < notescontent.length; i++) {
  addToSideBar(i)
}
