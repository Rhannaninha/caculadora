const Calcular = function() {
    var valor = parseInt(document.getElementById("valor").value);
    var hora = parseInt(document.getElementById("hora").value);
    var bruto1 = (valor * hora);
    let gratificação = 0
    let porcentagem = 0.15
    let bruto2 = 0
    let liquido1 = 0
    let liquido2 = 0
    
    if (hora >= 155 && hora <= 165) {
        gratificação = bruto1 * porcentagem
        bruto2 = bruto1 + gratificação
    }

    if (bruto2 > 2000) {
        irrf = bruto2 * porcentagem
        liquido2 = bruto2 - irrf
        alert('O salário líquido é: ' + liquido2)
 
    } else if (bruto2 <= 2000 && bruto2 !=0) {
        alert('O salário líquido é: ' + bruto2)

    } else if (bruto1 > 2000) {
        irrf = bruto1 * porcentagem
        liquido1 = bruto1 - irrf
        alert('O salário líquido é: ' + liquido1)

    } else if (bruto1 <= 2000) {
        alert('O salário líquido é: ' + bruto1)
    }
}