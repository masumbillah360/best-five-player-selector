function getInputValue(id) {
    const stringValue = document.getElementById(id).value;
    if (isNaN(stringValue) && typeof(stringValue) != 'number') {
        alert("Please Enter a Valied Amount\nAmount should be Number Value");
        return;
    }
    else{
        const value = parseFloat(stringValue);
        return value;
    }
}

function getInnerText(id) {
    const stringText = document.getElementById(id).innerText;
    const amount = parseFloat(stringText);
    return amount;
}

function setTextValue(id,value) {
    const findElement = document.getElementById(id).innerText = value;
    return findElement;
}

function fixedAmout(amount) {
    const totalAmount = amount.toFixed(2);
    const finalAmount = parseFloat(totalAmount);
    return finalAmount;
}
