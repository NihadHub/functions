const prompt = require('prompt-sync')();
function maxtab(table){
    let max = table[0];
    for(let i=1; i<table.lenght; i++){
        if (max < table[i]){
            max = table[i];
        }
    }
    return max;
} 
let tab = [];
let n = Number(prompt("combien de nombre tu veaux entrez? "));
for (let i=0; i<n; i++){
    tab[i]= Number(prompt(" entrez nombre"+(i+1)+": "));
}
console.log("le plus grand nombre est: "+ maxtab(tab));