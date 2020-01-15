// variables
let message = document.getElementById('message');
let currentWord = document.getElementById('current-word');
let timer = document.getElementById('time');
let score = document.getElementById('score');


let inputTyper = document.getElementById('word-input');


// words for type 
const words = ['Designer' , 'Developer', 'Timer' ,
               'World' ,'pineapple', 'tangrine',
               'javascript', 'counsin' , 'fish' , 
                'Hello' , 'grandMother' , 'rainbow',
                'Hello world' , 'i am slow'];


// func random word
function randomWord(){ 
let randomWord = words[Math.floor(Math.random() * words.length )];
return randomWord;
}


// variables save func interval
let storeTimer ;
function checker(){
if(inputTyper.value === currentWord.innerHTML){    
    score.innerHTML = currentScore++ ;
    resetValues( `nice work !`);
}
    
}
    
    
 inputTyper.addEventListener('keyup', checker);
 

 inputTyper.addEventListener('focus', () => { storeTimer = setInterval(startTimer , 1000) });   


function resetValues(msg){

    clearInterval(storeTimer);

    message.innerHTML = msg;
    inputTyper.value = '';
    inputTyper.blur();

    setTimeout(() => {
        value = true ;
        chooseWord();
        currentTimer = 5 ;
        message.innerHTML = '';
        timer.innerHTML = currentTimer ;
        inputTyper.focus();
      } , 3000);
}


// func focus and start timer 
let currentTimer = 5 ,
    currentScore = 0 ;
//init value inside current 
function setValue(){
 timer.innerHTML = currentTimer ;
 score.innerHTML = currentScore; 
}


function startTimer(){
    timer.innerHTML = currentTimer ;
    currentTimer-- ;

    
if(currentTimer < 0 ){
    resetValues('game over try again !');
}
}



// for load document choose the word 

function chooseWord(){
 currentWord.innerHTML = randomWord();
 setValue();
}





document.addEventListener('DOMContentLoaded' , chooseWord );