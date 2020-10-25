
function modal(modalId) {
    const modal = document.getElementById('modal')
    modal.classList.add('mostrar')
}

function fecharModal() {
    const modal = document.getElementById('modal')
    modal.classList.remove('mostrar')
}

let finalizar
function finalizarCompra() {
    finalizar =  window.location.href = "../pages/relatorio.html"
}

let voltar
function voltarPagina() {
    voltar = window.location.href = "../index.html"
}


function comprar() {

    var refeicaoPreco = 0
    var nomeRefeicao = ''

    let valorRefeicao = document.getElementById('select_refeicao').value

    if(valorRefeicao == 'ref_1') {
        refeicaoPreco = 7
        nomeRefeicao = 'Café da manhã'
        console.log(refeicaoPreco)
    } 
    else if (valorRefeicao == 'ref_2') {
        refeicaoPreco = 12
        nomeRefeicao = 'Almoço'
        console.log(refeicaoPreco)
    } 
    else {
        refeicaoPreco = 15
        nomeRefeicao = 'Jantar'
        console.log(refeicaoPreco)
    }


    var resortPreco = 0
    var nomeResort = ''

    let valorResort = document.getElementById('select_resort').value

    if(valorResort == 'res_1') {
        resortPreco = 8
        nomeResort = 'Chalé do Sul'
        console.log(resortPreco)
    } 
    else if (valorResort == 'res_2') {
        resortPreco = 10
        nomeResort = 'Casa de Praia'
        console.log(resortPreco)
    } 
    else {
        resortPreco = 4
        nomeResort = 'Casa de Campo'
        console.log(resortPreco)
    }


    var familiaPreco = 0
    var nomeFamilia = ''

    let valorFamilia = document.getElementById('select_familia').value

    if(valorFamilia == 'fam_1'){
        familiaPreco = 2
        nomeFamilia = 'até 2 pessoas'
        console.log(familiaPreco)
    } else if (valorFamilia == 'fam_2') {
        familiaPreco = 5
        nomeFamilia = 'até 5 pessoas'
        console.log(familiaPreco)
    } else {
        familiaPreco = 7
        nomeFamilia = 'até 7 pessoas'
        console.log(familiaPreco)
    }


    var gorjetaPreco = 0

    let valorGorjeta = document.getElementById('select_gorjeta').value

    if(valorGorjeta == 'gorj_1'){
        gorjetaPreco = 5
        console.log(gorjetaPreco)
    } 
    else if (valorGorjeta == 'gorj_2') {
        gorjetaPreco = 10
        console.log(gorjetaPreco)
    }
    else if (valorGorjeta == 'n_gorj') {
        gorjetaPreco = 0
        console.log(gorjetaPreco)
    } 
    else {
        valorGorjeta == 'gorj_3'
        gorjetaPreco = 15
        console.log(gorjetaPreco)
    }


    var subtotal = ((((resortPreco / 100) * refeicaoPreco) + refeicaoPreco) * familiaPreco )
    subtotal.toFixed(2)

 
    var resultadoCompras = (subtotal * (gorjetaPreco /100 )) + subtotal

    document.getElementById('resultadoCompra').innerHTML = `${resultadoCompras.toFixed(2)}`

    // ============= refeição 
    document.getElementById('nomeRefeicao').innerHTML = `${nomeRefeicao} `

    document.getElementById('textoRefeicao').innerHTML = ` R$ ${refeicaoPreco} uni.`

    // ============= resort
    document.getElementById('nomeResort').innerHTML = `${nomeResort}`

    document.getElementById('textoResort').innerHTML = ` Taxa de 
    ${resortPreco} % `

    // ============= familia
    document.getElementById('nomeFamilia').innerHTML = `${nomeFamilia}` 

    document.getElementById('textoFamilia').innerHTML = ` Taxa de ${familiaPreco} %`


    // ============= gorjeta
    document.getElementById('nomeGorjeta').innerHTML = ` Taxa de contribuição ` 

    document.getElementById('textoGorjeta').innerHTML = ` ${gorjetaPreco} %`

    
    // ============= total
    document.getElementById('nomeGorjeta').innerHTML = ` --- ` 

    document.getElementById('textoTotal').innerHTML = ` R$
    ${resultadoCompras.toFixed(2)}`

    modal('modal')
}

function criaPDF() {
    let modal = document.getElementById('modal').innerHTML
    let abrirPdf = window.open('height=700,width=1200')
    abrirPdf.document.write('<title> Relatório de compras </title>')
    abrirPdf.document.write(modal) 
    abrirPdf.document.close()                                    
    abrirPdf.print() 
}








