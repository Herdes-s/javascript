function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Erro')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade > 0 || idade < 10) {
                //criança
                img.setAttribute('src', 'img/criancam.jpg')
            } else if (idade < 21) {
                //Adolecente
                img.setAttribute('src', 'img/adolecentem.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'img/adultom.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'img/idosom.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade > 0 || idade < 10) {
                //criança
            } else if (idade < 21) {
                //Adolecente
            } else if (idade < 50) {
                //Adulto
            } else {
                //Idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Com ${idade} sendo ${genero}!`
        res.appendChild(img)
    }

    
}