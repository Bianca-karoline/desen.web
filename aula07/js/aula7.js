function sorte(){
    let max = parseInt(document.getElementById('max').value) ;
    let min = parseInt(document.getElementById('min').value);
    let sorteado = parseInt(Math.random() * (max - min + 1) )+min;
    document.getElementById('n').innerHTML = sorteado;
}
