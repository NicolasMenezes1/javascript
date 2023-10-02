var p = document.getElementById('res')
function analizar(){
    var n1 = prompt('Digite um número: ')
    var n2 = prompt('Digite outro número: ')

    if(n1>n2){
        p.innerHTML = `Analizando os valores ${n1} e ${n2}, o maior valor é <strong>${n1}</strong>`
    } else if(n1<n2){ 
        p.innerHTML = `Analizando os valores ${n1} e ${n2}, o maior valor é <strong>${n2}</strong>`
    } else { 
        p.innerHTML = `Analizando os valores ${n1} e ${n2}, ambos são <strong>IGUAIS</strong>`
    
    }

}