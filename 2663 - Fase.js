var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let num = parseInt(dados.shift());
let clas = parseInt(dados.shift());
let pontos = [];
let res = [];

while (num){
    pontos.push(parseInt(dados.shift()));
    num--;
}
pontos.sort((a,b)=> b-a);


for(let i = 0; i < pontos.length; i++){
    if( i < clas){
        res.push(pontos[i]);
    }
    
    if(i >= clas){
        if(pontos[clas - 1] == pontos[i]){
            res.push(pontos[i]);
        }
    }
}


console.log(res.length);