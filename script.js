
const button3 = document.getElementById('button3');
button3.onclick = () => buttonClick('button 3');

button3.onclick = countClick;

const button4 = document.getElementById('button4');
button4.addEventListener('mousedown', buttonClick);

const parPippo = document.getElementById('par-pippo');
parPippo.addEventListener('click', countClick);

function buttonClick(string) {
    console.log(string);
}

const link = document.getElementById('link');
link.addEventListener('click', displayPar);

document.addEventListener('keydown', changeBackground)



let counter = 0;

function countClick(event) {
    counter = counter +1;
    console.log(counter);
    //if (counter === 7) {
    //    button4.removeEventListener('click', countClick)
    //}
    event.stopPropagation();   //evita di propagare il click in caso di elementi sovrapposti
    
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