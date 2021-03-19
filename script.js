
var i = 0;
function nextimg() {
    document.getElementsByClassName("carousel-item")[i].className = "carousel-item";
    i++;
    if(i == 3) {
        i = 0;
    }
    document.getElementsByClassName("carousel-item")[i].className = "carousel-item active";
    console.log(i);
}

function previmg() {
    document.getElementsByClassName("carousel-item")[i].className = "carousel-item";
    i--;
    if(i == -1) {
        i = 2;
    }
    document.getElementsByClassName("carousel-item")[i].className = "carousel-item active";
    console.log(i);
}

function linkcakes() {
    window.location = "page2";
}

function linkcookies() {
    window.location = "page3";
}
