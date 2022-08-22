function getInputValue(id) {
    const stringValue = document.getElementById(id).value;
    if (isNaN(stringValue) && typeof(stringValue) != 'number') {
        alert("Please Enter a Valied Amount");
        return;
    }
    else{
        const value = parseFloat(stringValue);
        return value;
    }
}

function getInnerText(id) {
    const stringText = document.getElementById(id).innerText;
    const number = parseFloat(stringText);
    return number;
}

function setTextValue(id,value) {
    const findElement = document.getElementById(id).innerText = value;
    return findElement;
}
