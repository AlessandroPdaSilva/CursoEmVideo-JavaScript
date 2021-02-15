
var numero = document.querySelector('input#idNum')
var select = document.querySelector('select#idSel')
var valores = []

var imprimir = document.querySelector('p#imprimir')


function isNumero(){

    if(Number(numero.value) >=1 && Number(numero.value) <=100 ){
        return true
    }else{
        return false
    }

}


function isLista(n,valores){

    if( valores.indexOf(n) != -1){
        return true
    }else{
        return false
    }
    
}

function adicionar(){
    n = Number(numero.value)
    
    if(isNumero(n) && !isLista(n,valores)){
        valores.push(n)
        var option = document.createElement('option')
        option.innerHTML = ` valor ${n} adicionado`
        select.appendChild(option)


    }else{
        window.alert(' valor invalido ou ja digitado')
    }
    imprimir.innerHTML = ``
    numero.value = ''
    numero.focus()

} 

function finalizar(){

    if(valores.length == 0){
        window.alert('Adicione algum numero para finalizar ')
    }else{

        imprimir.innerHTML += ` <p> Foram adicionados ${valores.length} valores </p>`
        

    }
}