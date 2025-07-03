function carregar()  {

var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 12) { 
    //Bom dia
    img.src ='img/paisagem (3).jpg'
    document.body.style.backgroundColor = '#e2cd9f'
} else if (hora >=12 && hora <18){
    //Boa tarde
    img.src ='img/paisagem (2).jpg'
    document.body.style.backgroundColor = '#b9846f'
} else {
    //Boa noite
    img.src ='img/paisagem (1).jpg'
    document.body.style.backgroundColor = '#515154'
}
}