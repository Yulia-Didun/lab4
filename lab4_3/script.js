var count = 0;

function randomColor() {
    var randColor = "#" + ((1<<24)*Math.random() | 0).toString(16);
    return randColor;
}

function changeColor() {
    var paragraph = document.getElementsByTagName('p')[0];
    paragraph.style.color = randomColor();
  }

function SetInterval() {
    timeout = setInterval(changeColor, 2000);
    count++;
}  
  
function stopFunction() {
    clearInterval(timeout);
    count = 0;
}


function onClickEvent() {
    if(count == 0){
        SetInterval();
    } else {
        stopFunction();
    }
}
  