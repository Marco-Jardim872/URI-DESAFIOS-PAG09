var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let x = parseInt(dados.shift());
let y = parseInt(dados.shift());
let z = parseInt(dados.shift());

let opX = (2 * y) + (4 * z);
let opY = (2 * x) + (2 * z);
let opZ = (4 * x) + (2 * y);

let opcoes = [opX, opY, opZ];
opcoes.sort((a,b)=>a-b);


console.log(opcoes[0]);