/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I principali datatype (detti anche primitivi) sono:
  1) string = ovvero un insieme di simboli che insieme vengono letti come stringa perché delimitati da apici
  2) number = ovvero numeri che inseriti vengono letti come numeri (non delimitati da apici)
  3) bolean = solo le variabili true e false, che si possono usare per far fare a un'operazione che come esito da true una determinata cosa mentre in caso di esito false ne fa un'altra.
  4) null = ovvero una variabile inizializzata vuota, che è stata svuotata volutamente, presente nel codice e utilizzabile ma da dover dichiarare al momento del suo utilizzo
  5) NaN = not a number, che avviene quando si hanno operazione numeriche con variabili non numeriche 
  6) Undefined = ovvero una variabile inizializzata e non dichiarata
*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

const myName = "Nicole";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let num1 = 12;
let num2 = 20;
let somma = num1 + num2;

console.log("La somma tra", num1 + " + " + num2, "è:", somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

// myName = "Maini";   

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let num3 = 4;
let sottrazione = x - num3;

console.log("La sottrazione tra", x + " - " + num3, "è:", sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";

console.log(name2, "e", name1,"sono scritti uguali?", name1 === name2);
console.log(name2.toLowerCase(), "e", name1, "scritti uguali?", name1 === name2.toLowerCase());

