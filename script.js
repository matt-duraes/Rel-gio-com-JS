let relogioDigital = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');
let button = document.querySelector('button');

button.addEventListener('click', ()=>{
    document.querySelector('.none').classList.remove('none');
    button.classList.add('none');
});

function atualizarRelogio(){
    let agora = new Date();
    let hora =  agora.getHours();                   
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    relogioDigital.innerHTML = `${fixarZero(hora)}:${fixarZero(minutos)}:${fixarZero(segundos)}`;

    let sDeg =((360/60) * segundos) - 90;
    let mDeg = (((360/60) * minutos) - 90)
    let hDeg = (((360/12) * hora) - 90)


    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;



}

function fixarZero(time){
    return time < 10 ? `0${time}` : time;
}
setInterval(atualizarRelogio, 1000); 
atualizarRelogio();