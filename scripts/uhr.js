function updateTime() { document.querySelector("#timeElement").innerHTML = new Date().toLocaleString(); }
setInterval(updateTime, 1000);
