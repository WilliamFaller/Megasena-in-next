export function gerar(qtde = 6, numeros = []){
    
    if(qtde < 6 && qtde > 15) {
        throw "Quantidade Inválida!"
    }

    if (numeros.length === qtde){
        numeros.sort(function(a, b){
            return a - b
        });
        return numeros
    }
        const numeroAleatorio = parseInt(Math.random() * 60) + 1
    if(!numeros.includes(numeroAleatorio)) {
        return gerar(qtde, [...numeros, numeroAleatorio])
    } else {
        return gerar(qtde, numeros)
    }
}



