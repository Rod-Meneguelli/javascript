//window.alert('Olá, seja bem-vindo!')
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = 'fotomanha.png'
        document.body.style.background = '#B5BABD'
        document.body.style.font = '#BF8450'
    
    } else if (hora >= 12 && hora <= 18) {
        // boa tarde!
        img.src = 'fototarde.png'
        document.body.style.background = '#FFC359'
    
    } else {
        // Boa noite!
        img.src = "fotonoite.png"
        document.body.style.background = '#023373'
    }
      
}
/* testar para deixar o relogio "bunitinho"
var data = new Date()
var hora = data.getHours() + ':' + data.getMinutes() fica certinho tmb.
*/