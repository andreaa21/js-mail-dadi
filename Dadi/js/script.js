/* **Gioco dei dadi**
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */



const dadoPlayer = Math.ceil(Math.random() * 6);
const dadoComputer = Math.ceil(Math.random() * 6);

console.log(dadoPlayer);
console.log(dadoComputer);

if(dadoPlayer > dadoComputer){
    console.log('vince il giocatore');
}else if(dadoComputer > dadoPlayer){
    console.log('vince il computer');
}else{
    console.log('i due numeri sono uguali');
}