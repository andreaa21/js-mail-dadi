// **Mail**
//Chiedi all’utente la sua email
//controlla che sia nella lista di chi può accedere
//stampa un messaggio appropriato sull’esito del controllo.



const mailUtente = prompt('Inserisci la tua email')
const output = document.querySelector('output');


const emailList = ['email1', 'email2', 'email3', 'email4', 'email5']

if(emailList.includes(mailUtente)) {
    output.innerHTML = 'questa mail è già in uso'
}
if(!emailList.includes(mailUtente)) {
    output.innerHTML = 'questa mail può essere usata'
}

