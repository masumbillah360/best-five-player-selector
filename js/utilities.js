// function for get input value using id
function getInputValue(id) {
    const value = document.getElementById(id).value;
    return value;
}
// function for get innerText usign id
function getInnerText(id) {
    const stringText = document.getElementById(id).innerText;
    const amount = parseFloat(stringText);
    return amount;
}

// function for set input value in inner text element
function setTextValue(id,value) {
    const findElement = document.getElementById(id).innerText = value;
    return findElement;
}

// function for large floating amount
function fixedAmout(amount) {
    const totalAmount = amount.toFixed(2);
    const finalAmount = parseFloat(totalAmount);
    return finalAmount;
}

//create a function for validation input value 
function validationValue(value) {
    if (isNaN(value) || value.length<=0) {
        alert("Please Enter Valied Amount");
        return;
    }
    else{
        const output = parseFloat(value);
        return output;
    }
}