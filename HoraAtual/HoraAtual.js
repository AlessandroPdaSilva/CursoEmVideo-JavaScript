
// variaveis
var imagem = window.document.getElementById('imagem')
var tHora = window.document.getElementById('textHora')
//horario
var date = new Date()
var hora = date.getHours()

function trocaPagina() { }
if (hora > 0 && hora < 12) {
    //manha
    imagem.src = 'img_manha.jpg'
    window.document.body.style.backgroundColor = '#E0A2A6'
    tHora.innerHTML = ` Hora atual : ${hora} horas`
} else if (hora > 12 && hora < 18) {
    // tarde
    imagem.src = 'img_tarde.jpg'
    window.document.body.style.backgroundColor = 'rgb(253, 160, 1)'
    tHora.innerHTML = ` Hora atual : ${hora} horas`
} else {
    //noite
    imagem.src = 'img_noite.jpg'
    window.document.body.style.backgroundColor = 'gray'
    tHora.innerHTML = ` Hora atual : ${hora} horas`
}


