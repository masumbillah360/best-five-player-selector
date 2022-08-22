function getInputValue(id) {
    const stringValue = document.getElementById(id).value;
    const value = parseFloat(stringValue);
    return value;
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
