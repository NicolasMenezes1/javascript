function inicio(){

    let p = document.getElementById('res')
    let nasci = prompt('Em que ano você nasceu?')
    let data = new Date()
    let ano = data.getFullYear()
    let idade = Number(ano) - Number(nasci)


    p.innerHTML = `Quem nasceu em ${nasci} vai completar <strong>${idade}</strong> anos em ${nasci}.`

}