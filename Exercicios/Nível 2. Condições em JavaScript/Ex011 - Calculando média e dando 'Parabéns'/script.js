function calcular(){
    let nome = prompt('Qual o nome do aluno ?')
    let n1 = prompt(`Qual foi a primeira nota do ${nome}?`)
    let n2 = prompt(`Qual foi a segunda nota do ${nome}?`)
    let p = document.getElementById('p')
    let soma = Number(n1) + Number(n2)
    let media = soma/2
    let msg
    
    if(media>=6){
        msg = 'Meus parabéns!'   
    } else {
        msg = 'Estude um pouco mais!'
    }
  
    p.innerHTML = `<p>Calculando a média de <mark>${nome}</mark>.</p>`
    p.innerHTML += `<p>As notas obtidas foram <mark>${n1} e ${n2}</mark>.</p>`  
    p.innerHTML += `<p>A média final será <mark>${media}</mark>.</p>` 
    p.innerHTML += `<p>A mensagem que temos é: <strong style='color:red;'>${msg}</strong>.</p> `

}