function gerar(){
    let min = 0
    let max = 100
    let dif = max-min
    let aleatorio = Math.random()
    let num = min + Math.trunc(dif * aleatorio)
    let res = document.getElementById('res')

    res.innerHTML += `<p>Acabei de pensar no número <mark>${num}</mark>!</p>`
}

function limpar(){
    let res = document.getElementById('res')
    res.innerHTML = null 
}