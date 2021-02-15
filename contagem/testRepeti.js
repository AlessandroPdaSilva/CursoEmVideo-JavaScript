
function contar() {

    // var
    var idInicio = document.getElementById('idInicio')
    var inicio = Number(idInicio.value)
        
    var idFim = document.getElementById('idFim')
    var fim = Number(idFim.value)
        
    var idContagem = document.getElementById('idContagem')
    var contagem = Number(idContagem.value)
           
    var imprimir = document.getElementById('idTxtResp')

    
    // teste 
        imprimir.innerHTML = 'Resultado '
        if (inicio < fim){
            //contagem crescente
            for(let i = inicio; i <= fim; i+=contagem){
                imprimir.innerHTML += ` * ${i}`
            }
        }else{
            //contagem decrescente
            for(let i = inicio; i >= fim; i-=contagem){
                imprimir.innerHTML += `  *  ${i}`
            }
        
        
        
    }
}




