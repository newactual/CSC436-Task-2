import { add, multiply } from "./math";

const eventHandler = () => {

    const addButton = document.getElementById('add');
    const multiplyButton = document.getElementById('multiply');
    const number1 = document.getElementById('number-1');
    const number2 = document.getElementById('number-2');
    const result = document.getElementById('result');
    const checkRequiredValues = (el1, el2) => {
        if( (el1.value.length === 0) || (el2.value.length === 0)) {
            return false;
        }

        return true;
    }
    const updateDomWithAddedNumbers = () => {
        if( !checkRequiredValues(number1, number2) ) {
            return result.innerHTML = "<span style='color: white;background-color: red;'>ERROR: Both inputs require a value</span>";
        }

        result.innerHTML = add(number1.value,number2.value) + " (result of addition)";
    }
    const updateDomWithMultipliedNumbers = () => {
        if( !checkRequiredValues(number1, number2) ) {
            return result.innerHTML = "<span style='color: white;background-color: red;'>ERROR: Both inputs require a value</span>";
        }

        result.innerHTML = multiply(number1.value, number2.value) + " (result of multiplication)";
    }

    addButton.addEventListener('click', updateDomWithAddedNumbers);
    multiplyButton.addEventListener('click', updateDomWithMultipliedNumbers);

}

export  {eventHandler};