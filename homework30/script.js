const myframe= document.getElementById("iframe");
document.querySelector(".button").addEventListener('click', num);
function num(){
    const nubmer = window.prompt("Введите число");
    const parsNum = parseInt(nubmer);
    const iwiondow = myframe.contentWindow;
    const idocument = myframe.contentDocument;
    if (isFinite(parsNum) ){
        const num = idocument.querySelector('.body').innerHTML = nubmer;
        iwiondow.response(+num);
    }else {
        idocument.querySelector('.body').innerHTML = '';
        document.getElementsByClassName('num')[0].innerHTML = 'Введите число'
    }

}
window.addEventListener("beforeunload", function (e) {
    const confirmationMessage = "\o/";

    (e || window.event).returnValue = confirmationMessage;
    return confirmationMessage;
});
function append(num){
    document.getElementsByClassName('num')[0].innerHTML = num
}





