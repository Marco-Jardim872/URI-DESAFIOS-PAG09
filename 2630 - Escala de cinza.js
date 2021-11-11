var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');


let num = dados.shift();
let cont = 0;
    while(num > 0){
       
        let con = dados.shift();
        let val = dados.shift().split(" ");
        let verm = parseInt(val.shift());
        let verde = parseInt(val.shift());
        let azul = parseInt(val.shift());
        let ordem = [verm,verde,azul].sort((a,b)=>a-b);
        let eye = Math.trunc(0.30 * verm + 0.59 * verde + 0.11 * azul);
        let mean = Math.trunc((verm + verde + azul)/3);
        let min = ordem[0];
        let max = ordem[2];
        
        cont++;
        if(con.includes('eye')){
            console.log("Caso #" + cont + ": " + eye);
           
        }else if(con.includes('mean')){
            console.log("Caso #" + cont + ": " + mean);
            
        }else if(con.includes('min')){
            console.log("Caso #" + cont + ": " + min);
            
        }else if(con.includes('max')){
            console.log("Caso #" + cont + ": " + max);
            
        }
  
    
        num--;
    }
        
       
