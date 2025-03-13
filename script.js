//SELECIOANDO ELEMENTOS HTML
const selectElement = document.querySelector('#currency')
const inputElement = document.querySelector('#amount')
const form = document.querySelector("form")


// Manipulando o input para receber somente numeros
inputElement.addEventListener("input", () => {
    const regexInput = /\D+/g
    inputElement.value = inputElement.value.replace(regexInput, "")

})


// capturando o evento de submit do formulario
form.addEventListener("submit", (e) => {
    e.preventDefault()

    console.log(selectElement.value)
})
