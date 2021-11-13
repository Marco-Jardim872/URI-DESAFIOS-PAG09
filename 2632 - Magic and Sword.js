var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let num = dados.shift();

while(num > 0 ){
    let dimen = dados.shift().split(" ");
    let larRet = parseInt(dimen.shift());
    let altRet = parseInt(dimen.shift());
    let x0 = parseInt(dimen.shift());
    let y0 = parseInt(dimen.shift());
    let valMag = dados.shift().split(" ");
    let magia = valMag.shift();
    let nivel = parseInt(valMag.shift());
    let cx = parseInt(valMag.shift());
    let cy = parseInt(valMag.shift());
    let raio = 0;

    let fogo = [200, 20, 30, 50];
    let agua = [300, 10, 25, 40];
    let terra = [400, 25, 55, 70];
    let ar = [100, 18, 38, 60];
    let dano = 0;
    let x1 = x0 + larRet;
    let y1 = y0 + altRet;
    let hipotese;

    if(magia.includes('fire')){ 
    raio = fogo[nivel];
    dano = 200;
    }else if(magia.includes('water')){  
    raio = agua[nivel];
    dano = 300;
    }else if(magia.includes('earth')){  
    raio = terra[nivel];
    dano = 400;
    }else if(magia.includes('air')){    
    raio = ar[nivel];
    dano = 100;
    }

    for(let a = x0; a <= x1;a++){
        for(let b = y0; b <= y1;b++){
            let hip1 = ((cx - a) * (cx - a) + (cy - b) * (cy - b)) <= raio * raio;
                        
            if(hip1){
               hipotese = true;
            }
        }
    }
    
   if(hipotese){
        console.log(dano);
    }else{
        console.log('0');
   }

    num--;
}
