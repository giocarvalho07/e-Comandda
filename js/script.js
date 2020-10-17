
function modal(modalId) {
    const modal = document.getElementById('modal')
    
    modal.classList.add('mostrar')

}

function fecharModal() {
    const modal = document.getElementById('modal')
    
    modal.classList.remove('mostrar')
}


function comprar() {

    var refeicaoPreco = 0

    let valorRefeicao = document.getElementById('select_refeicao').value

    if(valorRefeicao == 'ref_1') {
        refeicaoPreco = 7
        console.log(refeicaoPreco)
    } 
    else if (valorRefeicao == 'ref_2') {
        refeicaoPreco = 12
        console.log(refeicaoPreco)
    } 
    else {
        refeicaoPreco = 15
        console.log(refeicaoPreco)
    }


    var resortPreco = 0

    let valorResort = document.getElementById('select_resort').value

    if(valorResort == 'res_1') {
        resortPreco = 8
        console.log(resortPreco)
    } 
    else if (valorResort == 'res_2') {
        resortPreco = 10
        console.log(resortPreco)
    } 
    else {
        resortPreco = 4
        console.log(resortPreco)
    }


    var familiaPreco = 0

    let valorFamilia = document.getElementById('select_familia').value

    if(valorFamilia == 'fam_1'){
        familiaPreco = 2
        console.log(familiaPreco)
    } else if (valorFamilia == 'fam_2') {
        familiaPreco = 4
        console.log(familiaPreco)
    } else {
        familiaPreco = 7
        console.log(familiaPreco)
    }


    var gorjetaPreco = 0

    let valorGorjeta = document.getElementById('select_gorjeta').value

    if(valorGorjeta == 'gorj_1'){
        gorjetaPreco = 0
        console.log(gorjetaPreco)
    } 
    else if (valorGorjeta == 'gorj_2') {
        gorjetaPreco = 5
        console.log(gorjetaPreco)
    } 
    else if (valorGorjeta == 'gorj_3') {
        gorjetaPreco = 10
        console.log(gorjetaPreco)
    } 
     else {
        gorjetaPreco = 15
        console.log(gorjetaPreco)
    }


    var subtotal = ((((resortPreco / 100) * refeicaoPreco) + refeicaoPreco) * familiaPreco )


    var resultadoCompras = (subtotal * (gorjetaPreco /100 )) + subtotal



    document.getElementById('textoRefeicao').innerHTML = ` R$
    ${refeicaoPreco}`

    document.getElementById('textoResort').innerHTML = ` R$
    ${resortPreco}`

    document.getElementById('textoFamilia').innerHTML = ` R$
    ${familiaPreco}`

    document.getElementById('textoGorjeta').innerHTML = ` R$
    ${gorjetaPreco}`

    document.getElementById('textoTotal').innerHTML = ` R$
    ${resultadoCompras}`

    modal('modal')


}






