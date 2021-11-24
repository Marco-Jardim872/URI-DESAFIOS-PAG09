var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let res = [];

for (let i = 0; i < dados.length; i++) {
    
    
    if(res.includes(dados[i].trim())){
        continue;
    }else{
        res.push(dados[i].trim());
    }
 
}
console.log(res.length - 1);