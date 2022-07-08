//Variables

let flippedCards = 0;
let card1 = null;
let card2 = null;
let firstResult = null;
let secondResult = null;
let movements = 0;
let hits = 0;
let timer = false;
let timer2 = 30;
let countdown = null;
let initialTimer = 30;


//Apuntando a documento HTML

let showMovements = document.getElementById('movimientos')
let showHits = document.getElementById('aciertos')
let showTime = document.getElementById('tiempo-restante')

//Generar numeros aleatorios
let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];



//desordenar array
//array.sort math.random()

numbers = numbers.sort(()=> {return Math.random()-0.5});
console.log(numbers)


//funciones

function countTime(){
    countdown = setInterval(() => {
        timer2--;
        showTime.innerHTML = `Tiempo: ${timer2} segundos`;
        if(timer2 == 0){
           clearInterval(countdown);
           blockCards();
        }
    }, 1000);
}

function blockCards(){
    for (let i = 0; i <= 15; i++){
        let cardBlocked = document.getElementById(i);
        cardBlocked.innerHTML = numbers[i];
        cardBlocked.disabled = true;
    }
}

//Funcion principal
function turn (id){

    if(timer == false){
        countTime();
        timer = true;
    }
 //contador de tarjetas volteadas
 flippedCards++;
 console.log(flippedCards)


 if(flippedCards == 1){
     //Mostrar el primer numero
     card1 = document.getElementById(id);
     firstResult = numbers[id]
     card1.innerHTML = firstResult;

     //Deshabilitar el primer boton

     card1.disabled = true;
 }else if(flippedCards == 2){
     //mostrar segundo numero
     card2 = document.getElementById(id);
     secondResult = numbers[id];
     card2.innerHTML = secondResult;

     //Deshabilitar segundo boton
     card2.disabled= true;

     //Incrementar movimientos
    movements++;

    showMovements.innerHTML = `Movimientos: ${movements}`;

    if(firstResult == secondResult){
        //Encerrar contador tarjetas volteadas
        flippedCards = 0;

        //Aumentar aciertos
        hits++;
showHits.innerHTML = `Aciertos : ${hits}`;

if(hits == 8){
    clearInterval(countdown)
    showHits.innerHTML = `Aciertos : ${hits}`;
    showTime.innerHTML = `Genial! Solo demoraste: ${initialTimer - timer2} `;
    showMovements.innerHTML = `Movimientos: ${movements}  `; 
}   

    }else{
        //Mostrar momentaneamente valores y volver a voltear

        setTimeout(() => {
            card1.innerHTML = '';
            card2.innerHTML = '';
            card1.disabled = false;
            card2.disabled = false;
            flippedCards = 0;
        }, 1000)
    }
 }
}