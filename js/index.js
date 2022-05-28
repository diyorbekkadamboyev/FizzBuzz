const elForm = document.querySelector("form");
const elFormInput = document.querySelector(".form-control");
const elBtn = document.querySelector(".btn");
const textAge = document.querySelector(".answer");

elForm.addEventListener("submit",function(evt){
    evt.preventDefault()

    const inputValue = elFormInput.value;

    const inputAge = function(valuesOne) {

        if((valuesOne % 3 === 0) && (valuesOne % 15 > 0)) {
            return "Fizz"
        } else if((valuesOne % 5 === 0) && (valuesOne % 15 > 0)){
            return "Buzz"
        } else if(valuesOne % 15 === 0) {
            return "Fizz Buzz"
        } else {
            return valuesOne
        }
        
    }

    textAge.textContent = `${inputAge(inputValue)}`
})