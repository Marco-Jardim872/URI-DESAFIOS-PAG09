var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

while(dados.length > 0){
    let num = parseInt(dados.shift());
    let pal = [];
    let count = 0;
    let consultas = [];
    let comp = 0;
    let result = [];

    while (num) {   
    pal.push(dados.shift().trim());
    num--;
    }
    let numCons = parseInt(dados.shift());

    while (numCons) {
        consultas.push(dados.shift().trim());
        numCons--;
    }

    for(let i = 0; i < consultas.length; i++) {
        count = 0;
        comp = 0;
        for(let j = 0; j < pal.length; j++) {
            if ((pal[j].includes(consultas[i])) && (pal[j].indexOf(consultas[i]) === 0)){
                if((pal[j + 1]) && (pal[j].length >= pal[j + 1].length)) {
                        comp = pal[j].length;
                        
                }
                count++;
            }
           
        }
        
        result.push(count);
        result.push(comp);
  
        if(count === 0 ){
            result = -1;
            console.log(result);
        }else{
            console.log(result.join(" "));
        }
        result = [];
  
}



}