for(let i = 0; i < 1024; i++) {
    document.querySelector(".app").innerHTML += '<div></div>';
}
document.body.addEventListener('click', event => {
    event.target.style.backgroundColor = 'white';
    event.target.style.border = '2px solid black';
})
document.addEventListener('keydown', event => {
    if(event.key === 'z'){
        document.querySelector(".app").style.backgroundColor = '#00f';
    }
    if(event.key === 'x'){
        document.querySelector(".app").style.backgroundColor = '505';
    }
    if(event.key === 'q'){
        document.querySelector(".app").style.backgroundColor = '#0f0';
    }
})
document.querySelector('.clear').addEventListener('click', event =>{
    window.location = window.location;
})
document.body.addEventListener('click', event => {
    if(event.ctrlKey){
        event.target,innerText = document.querySelector('.#text').value;
        let blue = document.querySelector('.blue').value;
        event.target.style.backgroundColor='rgb(' + blue + ',0, 0)';
    }
    if(event.shiftlKey){
        let purple = document.querySelector('.purple').value;
        event.target.style.backgroundColor='rgb(' + purple + ',0, 0)';
    }
    if(event.shiftlKey){
        let green = document.querySelector('.green').value;
        event.target.style.backgroundColor='rgb(' + green + ',0, 0)';
    }
})