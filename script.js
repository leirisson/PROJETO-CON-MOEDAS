//SELECIOANDO ELEMENTOS HTML
const selectElement = document.querySelector('#currency')
const inputElement = document.querySelector('#amount')



// Manipulando o input para receber somente numeros
inputElement.addEventListener("input", () => {
    const regexInput = /\D+/g
    inputElement.value = inputElement.value.replace(regexInput, "")

})

