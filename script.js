

let intervalCounter = 0;
const interval = setInterval(() => {
    console.log("Pluto ogni secondo fino a 10");
    if (intervalCounter === 9) {
        clearInterval(interval);
    }
    intervalCounter++;
}, 1000);

setTimeout(() => {
    console.log("Pippo dopo 10 secondi");
}, 10000);


const button3 = document.getElementById('button3');
button3.onclick = () => buttonClick('button 3');

button3.onclick = countClick;

const button4 = document.getElementById('button4');
button4.addEventListener('mousedown', buttonClick);
document.addEventListener('keydown', onKeyDown);



const parPippo = document.getElementById('par-pippo');
parPippo.addEventListener('click', countClick);

function buttonClick(string) {
    console.log(string);
}

const link = document.getElementById('link');
link.addEventListener('click', displayPar);

document.addEventListener('keydown', changeBackground);


const div = document.getElementById('tomato');
div.addEventListener('mouseenter', onMouseEnter);
div.addEventListener('mouseleave', onMouseLeave);

let counter = 0;

function countClick(event) {
    counter = counter +1;
    console.log(counter);
    //if (counter === 7) {
    //    button4.removeEventListener('click', countClick)
    //}
    event.stopPropagation();    //evita di propagare il click in caso di elementi sovrapposti
    
}

function displayPar(event) {
    let par = document.getElementById('hidden-par');
    par.style.display = 'block'
    event.preventDefault();     //evita l'attivazione della funzione di default dell'elemento, come un link che carica una pagina 
}

function changeBackground(event) {
    let number = parseInt(event.key);
    if (event.ctrlKey === true && !isNaN(number)) {
        event.preventDefault();
        document.body.style.backgroundColor = '#' + number + number + number + number + number + number;
    }
}

function onMouseEnter() {
    console.log("Sono entrato");
}

function onMouseLeave() {
    console.log("Sono uscito");
}

let selectedKey = "";
function onKeyDown(event) {
    if (event.key !== selectedKey) {
        console.log("Tasto premuto: " + event.key);
        selectedKey = event.key;    
    }
}

let searchTimeout;
function realTimeSearch(event) {
    if (searchTimeout) {
        clearTimeout(searchTimeout);
    }
    searchTimeout = setTimeout(() => {
        console.log("Sto cercando");
    }, 1000);
}