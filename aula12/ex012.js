var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)

if(hora<12){
    console.log('Bom dia!')

} else if (hora>=12 && hora<19){
        console.log('Boa tarde!')

} else if(hora >=19){
            console.log('Boa noite!')
 }
    

