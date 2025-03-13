//SELECIOANDO ELEMENTOS HTML
const selectElement = document.querySelector('#currency')
const inputElement = document.querySelector('#amount')



// Manipulando o input para receber somente numeros
inputElement.addEventListener("input", () => {
    console.log(inputElement.value)
})