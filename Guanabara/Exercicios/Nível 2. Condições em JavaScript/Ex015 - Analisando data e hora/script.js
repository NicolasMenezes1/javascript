 function analise(){
    let res  = document.getElementById('res')
    let data = new Date()
    let dia  = data.getDate()
    let mes  = data.getMonth()
    let ano  = data.getFullYear()
    let diaS = data.getDay()
    let hora = data.getHours()
    let min  = data.getMinutes()
    let seg  = data.getSeconds()

    switch(diaS){
        case 0:
            diaS  = 'Domingo'
            break
        case 1:
            diaS = 'Segunda'
            break    
        case 2:
            diaS = 'Terça'
            break
        case 3:
            diaS = 'Quarta'
            break
        case 4:
            diaS = 'Quinta'
            break
        case 5:
            diaS = 'Sexta'
            break
        case 6:
            diaS = 'Sábado'
            break
    }
    

    res.innerHTML = `<p>Dia: <mark>${dia}</mark></p>
    <p>Mês: <mark>${mes + 1}</mark></p>
    <p>Ano: <mark>${ano}</mark></p>
    <p>Dia da Semana: <mark>${diaS}</mark></p>
    <p>Hora: <mark>${hora}</mark></p>
    <p>Minuto: <mark>${min}</mark></p>
    <p>Segundo: <mark>${seg}</mark></p>
    ` 
}