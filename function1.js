const prompt = require('prompt-sync')();
let table = [];
for( let i=0; i<5; i++){
    table[i] = Number(prompt("entrer une valeur " +(i+1)+": "));
}
function sommeTableau(tab){
     let somme = 0;
    for( let i=0; i<tab.length; i++){
   
    somme =somme + tab[i];
    }
    return somme;
}
console.log(sommeTableau(table));


