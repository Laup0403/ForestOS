var opened = false;

function checkPromt() {
  inputScreen = document.querySelector("#termInput");

  if (!opened) {
    printToTerminal("<b>Hello you,<br>Do you want to know how to get out of this place?<br>(y/n)</b>")
  }

  inputScreen.addEventListener('keydown', function (keyDown) {
    if (keyDown.key == 'Enter') {
      var commandLine = inputScreen.value.trim();

      if (!opened) {
        if (commandLine == "y" || commandLine == "yes") {
          printToTerminal(`<span class="prompt"><strong>user@ForestOS:</strong> </span> ${commandLine}`);
          printToTerminal("<b>Good,<br>but first...<br><br>Someone is watching us.</b>");
          opened = true;
        }
        else if (commandLine == "n" || commandLine == "no") {
          printToTerminal(`<span class="prompt"><strong>user@ForestOS:</strong> </span> ${commandLine}`);
          printToTerminal('<b>Are you sure?<br>(y/n)</b>');
          return;
        }
      }
      else if (commandLine !== '' && opened) {
        handlePromt(commandLine);
        inputScreen.value = '';
      }
    }
  })
};

function handlePromt(line) {

  var outputScreen = document.querySelector("#termOutput")

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
      printToTerminal('<b>OS:</b> ForestOS 1.3<br><b>Shell:</b> bark<br><b>User:</b> user<br><b>CPU: </b>Intel Ryzen 5500<br><b>GPU: </b>Lidl Geforce Intergrated');
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
  var outputScreen = document.querySelector("#termOutput")
  var  p = document.createElement('p');
  p.innerHTML = text;
  outputScreen.appendChild(p);

  // Automatisch nach unten scrollen, wenn Text dazukommt
  const windowEl = document.querySelector("#termScreen");
  windowEl.scrollTop = windowEl.scrollHeight;
};

checkPromt();
