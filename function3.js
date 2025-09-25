const prompt = require('prompt-sync')();

let table = [];
for ( let i=0; i<4; i++){
    table[i]= Number(prompt("entrer une valeur :"));
}
function CompterOccurences(tab,valeur){
 let compteur= 0;
 valeur = Number(prompt("entrez la valeur: "));
 for (let i=0; i<4; i++){

 if (valeur == tab[i] ){
    ++compteur;
 }
 }
 return compteur;
}
console.log(CompterOccurences(table));




