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

function validation(number) {
    if (isNaN(number)) {
        console.log("Enter a Valied Amount")
    }
    else{
        console.log("Your Number is correct");
    }
}
validation("asd");

const nameContainer = document.getElementById('player-name-container');
const pBtn = document.getElementsByClassName('p-btn');
for(const btn of pBtn){
    btn.addEventListener('click',(event)=>{
        const pName = event.target.parentNode.querySelectorAll('.p-name');
        for(const player of pName){
            const nameCount = nameContainer.childElementCount;
            if (nameCount<5) {
                const createList = document.createElement('li');
                createList.classList.add('fw-bold')
                createList.innerText = player.innerText;
                nameContainer.appendChild(createList);
                event.target.setAttribute('disabled',true);
            }
            else{
                alert("You cant Added more.\n Thank You")
            }

        }
    })
}
document.getElementById('calculate-btn').addEventListener('click',()=>{
    const playerName = document.getElementById('player-name-container');
    const playersNumbers = playerName.childElementCount;
    if (playersNumbers<=0) {
        alert("No Player on your top Players Lists");
    }
    else{
        const perPlayerCost = getInputValue('per-player');
        if (isNaN(perPlayerCost) || typeof(perPlayerCost) !='number') {
            alert("Please Enter Valied Amount");
        }
        else{
            const totalCost = playersNumbers * perPlayerCost;
            setTextValue('player-expense',totalCost);
        }
    }
});

document.getElementById('calculate-total').addEventListener('click',()=>{
    const managerCost = getInputValue('manager-cost');
    const coachCost = getInputValue('coach-cost');
    if (isNaN(managerCost) || isNaN(coachCost)) {
        alert("Please Enter valied Amount");
    }
    else{
        const playerExpense = getInnerText('player-expense');
        const totalCost = managerCost + coachCost + playerExpense;
        setTextValue('total-cost', totalCost);
    }
})