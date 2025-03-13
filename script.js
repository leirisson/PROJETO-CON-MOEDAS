//SELECIOANDO ELEMENTOS HTML
const selectElement = document.querySelector('#currency')
const inputElement = document.querySelector('#amount')
const form = document.querySelector("form")
const footer = document.querySelector("main footer")
const description = document.querySelector("#description")
const result = document.querySelector("#result")



// cotação de moedas do dia 
const USD = 6.15
const EUR = 5.32
const GBP = 6.08


// Manipulando o input para receber somente numeros
inputElement.addEventListener("input", () => {
    const regexInput = /\D+/g
    inputElement.value = inputElement.value.replace(regexInput, "")

})


// capturando o evento de submit do formulario
form.addEventListener("submit", (e) => {
    e.preventDefault()

    const amount = inputElement.value
    const tipoMoeda = selectElement.value

    switch (tipoMoeda) {
        case 'USD':
            convertCurrency(amount, USD, 'US$')
            break
        case 'EUR':
            convertCurrency(amount, USD, '€')
            break
        case 'GBP':
            convertCurrency(amount, GBP, '£')
            break
    }

})


// função para converter a moeda
function convertCurrency(amount, price, symol) {
    try {
        // adciona a classe que exibe o resultado
        footer.classList.add('show-result')

        description.textContent = `${symol} 1 = ${formatCurrencyBRL(price)}`

        let value = amount * price

        if(isNaN(value)){
            alert('Digite um valor corretamente para converter.')
        }
        result.textContent = `${formatCurrencyBRL(value)} Reais`
        
    } catch (error) {
        console.log(error)
        // remove a classe do footer exibe o footer
        footer.classList.remove("show-result")
        alert('Não foi possivel converter. Tente novamente mais tarde.')
    }

}

// formata a moeda em real brasileiro
function formatCurrencyBRL(value){
    return Number(value).toLocaleString("pt-br", {
        style:"currency",
        currency: "BRL"
    })
}