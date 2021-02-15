
            function verificar() {
                //var nascimento
                var date = new Date()
                var anoAtual = date.getFullYear()

                // var nascimento usuario
                var anoDigitado = window.document.getElementById('nasc')
                var ano = Number(anoDigitado.value)



                


                //testes 
                if(ano < 0 || ano > anoAtual){
                    window.alert('Valor de nascimento invalido')// invalido
                }else{
                    //sexo
                    var sexo = window.document.getElementsByName('Sexo')
                    var sexotext = ''
                    var idade = anoAtual - ano
                    //imagem
                    var imagem = document.getElementById('img')
                   
                    // var caixa resposta
                    var textResp = document.getElementById('txtResp')
                    if(sexo[0].checked){
                        //masculino
                        sexotext = 'masculino'
                        if (idade >= 0 && idade < 10){
                            // crianca
                            imagem.src = 'icone/crianca-homem-icone.jpg'
                            //imprimir
                            textResp.innerHTML =` <p> ${idade} anos</p>`
                        }else if(idade < 21){
                            // jovem
                            imagem.src = 'icone/jovem-homem-icone.jpg'
                            //imprimir
                            textResp.innerHTML =` <p> ${idade} anos</p>`
                        }else if(idade < 50){
                            // adulto
                            imagem.src = 'icone/adulto-homem-icone.jpg'
                            //imprimir
                            textResp.innerHTML =` <p> ${idade} anos</p>`
                        }else{
                            //idoso
                            imagem.src = 'icone/velho-homem-icone.jpg'
                            //imprimir
                            textResp.innerHTML =` <p> ${idade} anos</p>`
                        }
                    }else{
                        //feminino
                        sexotext = 'feminino'
                        if (idade >= 0 && idade < 10){
                            // crianca
                            imagem.src = 'icone/crianca-mulher-icone.jpg'
                            //imprimir
                            textResp.innerHTML =` <p> ${idade} anos</p>`
                        }else if(idade < 21){
                            // jovem
                            imagem.src = 'icone/jovem-mulher-icone.jpg'
                            //imprimir
                            textResp.innerHTML =` <p> ${idade} anos</p>`
                        }else if(idade < 50){
                            // adulto
                            imagem.src = 'icone/adulto-mulher-icone.jpg'
                            //imprimir
                            textResp.innerHTML =` <p> ${idade} anos</p>`
                        }else{
                            //idoso
                            imagem.src = 'icone/velho-mulher-icone.jpg'
                            //imprimir
                            textResp.innerHTML =` <p> ${idade} anos</p>`
                        }
                    }
                }


                //imprimir
                textResp.innerHTML =` <p> ${idade} anos</p>`
            }
        
