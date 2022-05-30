count = 0;

title = "Дідун Юлія, КН-12 ";
position = 0;

function scrollTitle() {
    document.title = title.substring(position, title.length) + title.substring(0, position); 
    position++;
    if (position > title.length) position = 0;
    titleScroll = window.setTimeout(scrollTitle,170);
    count++;
}

function stopFunction() {
    clearInterval(titleScroll);
    count = 0;
}


function onClickEvent() {
    if(count == 0){
        scrollTitle();
    } else {
        stopFunction();
    }
}