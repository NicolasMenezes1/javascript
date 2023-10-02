function carregar(){
    let min = 0
    let max = 100
    let dif = max-min
    let aleatorio = Math.random()
    let num = min + Math.trunc(dif * aleatorio)
}

function apertar(){
    var palpite = prompt('Qual é o seu palpite?')

    if (palpite < num){
        res.innerHTML += `<p> Você falou palpite. Meu número é MAIOR! <mark>${num}</mark>!</p>`
    }
    

        






}