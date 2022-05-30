window.onload = function() {  
    setTimeout(changeColor, 3000);
  }
  
function changeColor() {
    var paragraph = document.getElementsByTagName('p')[0];
    paragraph.style.color = 'red';
  }