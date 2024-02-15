// Below both is used to add hover effect on buttons of cards
function hoverEffect(element) {
    element.style.color = "white";
    element.style.backgroundColor = "rgb(1,156,1)";
    element.style.border = "2px solid rgb(1,156,1)";
}


function normalEffect(element) {
    element.style.color = "black";
    element.style.backgroundColor = "transparent";
    element.style.border = "1px solid black";
}
// end
function readfunc2() {
    let john2 = document.getElementById('para2');
    if (john2.style.display == 'block') {
        john2.style.display = 'none'
    } else {
        john2.style.display = 'block'
    }
    let text2 = document.getElementById('readmore2');
    console.log(text2.innerText)
    if (text2.innerText == 'Read more') {
        text2.innerText = 'Read less';
    } else {
        text2.innerText = 'Read more';
    }
}