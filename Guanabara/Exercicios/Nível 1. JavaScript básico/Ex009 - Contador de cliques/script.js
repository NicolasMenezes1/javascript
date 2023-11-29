let value = 0
var res = document.getElementById('res')

function contar(){
    value ++
    res.innerHTML = `<p>O contador está com <mark>${value}</mark> cliques.</p>`
}

function zerar(){
    value = 0 
    res.innerHTML = null
    
}

