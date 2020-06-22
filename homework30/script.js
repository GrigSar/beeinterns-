const myframe= document.getElementById("iframe");
document.querySelector(".button").addEventListener('click', num);
function num(){
    let nubmer = window.prompt("Введите число");
    let iwiondow = myframe.contentWindow;
    let idocument = myframe.contentDocument;
    let num = idocument.querySelector('.body').innerHTML = nubmer;
    iwiondow.response(+num);
}
window.addEventListener("beforeunload", function (e) {
    var confirmationMessage = "\o/";

    (e || window.event).returnValue = confirmationMessage;
    return confirmationMessage;
});
function append(num){
    document.getElementsByClassName('num')[0].innerHTML = num
}






