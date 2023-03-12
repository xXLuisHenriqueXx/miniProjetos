
let min = 00
let seg = 00
let mile = 00

let appendMin = document.getElementById('min')
let appendSeg = document.getElementById('seg')
let appendMile = document.getElementById('mile')

/*
let btnStart = document.getElementById('btnStart')
let btnStop = document.getElementById('btnStop')
let btnReset = document.getElementById('btnReset')
*/

let meuIntervalo // variavel usada para os intervalos

function startInt(){ // inicia o cronometro
    clearInterval(meuIntervalo)

    meuIntervalo = setInterval(startCron, 10)
}

function stopInt(){ // para o cronometro
    clearInterval(meuIntervalo)
}

function resetInt(){ // reseta os valores do cronometro
    clearInterval(meuIntervalo)

    min = "00"
    seg = "00"
    mile = "00"

    appendMin.innerHTML = min
    appendSeg.innerHTML = seg
    appendMile.innerHTML = mile
}

function startCron () {
    mile++
    //milesimos
    if(mile <= 9){ // caso os numeros alterados sejam apenas os da direita
        appendMile.innerHTML = "0" + mile 
    }
    if (mile > 9){ // quando passa de 10 mile
        appendMile.innerHTML = mile
    } 

    //segundos
    if (mile > 99) {
        seg++
        appendSeg.innerHTML = "0" + seg
        mile = 0
        appendMile.innerHTML = "0" + 0
    }
    if (seg > 9){
        appendSeg.innerHTML = seg;
    }

    //minutos
    if (seg > 59){
        min++
        appendMin.innerHTML = "0" + min
        seg = 0
        appendSeg.innerHTML = "0" + 0
    }  
  }
