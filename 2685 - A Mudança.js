var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

while(dados.length > 0){
    let grau = parseInt(dados.shift());
    if (0 <= grau && grau <= 360){
        if ((grau < 90) || grau == 360){
            console.log('Bom Dia!!');
        }else if((90 <= grau) && (grau < 180)){
            console.log('Boa Tarde!!');
        }else if((180 <= grau) && (grau < 270)){
            console.log('Boa Noite!!');
        }else if((270 <= grau) && (grau < 360)){
            console.log('De Madrugada!!');
        }
    }
}