
const container = document.querySelector(".container")
const iniciar = container.querySelector("#iniciar")
const pausar = container.querySelector("#pausar")
const parar = container.querySelector("#parar")

iniciar.addEventListener("click", Start)
pausar.addEventListener("click", Pause)
parar.addEventListener("click", Stop)

let milis = container.querySelector("#milissegundos")
let secon = container.querySelector("#segundos")
let minut = container.querySelector("#minutos")
let hr = container.querySelector("#horas")
let milisseconds = 0
let seconds = 0
let minutes = 0
let hours = 0
let interval = null

//FUNÇÃO INICIAR
function Start() {
    Pause()
    interval = setInterval(Counter, 10)
}

//FUNÇÃO PAUSAR
function Pause() {
    clearInterval(interval)
}

//FUNÇÃO PARAR
function Stop() {
    clearInterval(interval)
    milisseconds = 0
    seconds = 0
    minutes = 0
    hours = 0
    milis.innerHTML = "000"
    secon.innerHTML = "00"
    minut.innerHTML = "00"
    hr.innerHTML = "00"
}

//FUNÇÃO ELEMENTO ZERO
function Number(element) {

    if(element < 10) {
        return "0" + element
    }
    else {
        return element
    }
}

//FUNÇÃO CONTADOR
function Counter() {
    
    if((milisseconds += 10) === 1000) {
        seconds ++
        milisseconds = 0
    }
    if(seconds === 60) {
        minutes ++
        seconds = 0
    }
    if(minutes === 60) {
        hours ++
        minutes = 0
    }
    
    milis.innerHTML = Number(milisseconds)
    secon.innerHTML = Number(seconds)
    minut.innerHTML = Number(minutes)
    hr.innerHTML = Number(hours)
}