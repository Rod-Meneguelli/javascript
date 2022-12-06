function verificar() {
    var formnum = document.getElementById('txtest')
    //var res = document.querySelector('div#resul')
    var img = document.getElementById('imagem')
    //var formnum = 2
    var estacao = document.getElementById('estacao')

    if (formnum.value <= 0 || Number(formnum.value) > 12) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        if (formnum.value < 4 || formnum.value == 12) {
            //verão             
            img.src = 'verao-img.png'
            estacao.innerHTML = `<strong> Estação do Verão! </strong>`
            document.body.style.background = '#fea23b'
            
                        
        } else if (formnum.value < 7) {
            //outono
            img.src = 'outono-img.png'
            estacao.innerHTML = `<strong> Estação do Outono! </strong>`
            document.body.style.background = '#f4e5ae'
            
        }  else if (formnum.value < 10) {
            //inverno
            img.src = 'inverno-img.png'
            estacao.innerHTML = `<strong> Estação do Inverno! </strong>`
            document.body.style.background = '#cbccd1'
                    
        } else {
            //primavera
            img.src = 'primavera-img.png'
            estacao.innerHTML = `<strong> Estação da Primavera! </strong>`
            document.body.style.background = '#e788a0'
            

        }
    }
}