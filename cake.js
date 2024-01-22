let burro = 200;
let amaretti = 250;
let zucchero = 200;
let cacaoAmaro = 100;
let liquore = 2;
let uova = 2;

let agg = 100;

// 1 passaggio
let burroFuso = burro + agg;
console.log("Fondere il burro:", burroFuso + "g");

// 2 passaggio

agg = 50;
let amarettiSbriciolati = amaretti + agg;

console.log("Sbriciolare i biscotti:", amarettiSbriciolati + "g");

// 3 passaggio

let residuo = 15;
let composto = (burroFuso + amarettiSbriciolati + zucchero + cacaoAmaro + liquore + uova) - residuo;

console.log("Ora mescoliamo e otteniamo", composto + "g di composto");

// 4 passaggio

residuo = 25;
composto = composto - residuo;

console.log("Ora spostiamo il composto di", composto + "g su un foglio di alluminio e lo mettiamo in frigo");

// 5 passaggio

residuo = 45;
composto = composto - residuo;
console.log("Abbiamo ottenuto un composto di " + composto + "g");

composto = composto - liquore;

console.log("Se il liquore non piace. basterà non inserirlo e il composto sarà di " + composto + "g");