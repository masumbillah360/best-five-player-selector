// parent element ul for contain players list
const playerNameContainer = document.getElementById('player-name-container');

// select player from page to select on Players list
const playerBtn = document.querySelectorAll('.select-btn');
for(const btn of playerBtn){
    btn.addEventListener('click',function(event){
        const playerNames = event.target.parentNode.querySelectorAll('.player-name');
        for(const name of playerNames){
            const nameCount = playerNameContainer.childElementCount;
            if (nameCount<5) {
                const createList = document.createElement('li');
                createList.classList.add('fw-bold')
                createList.innerText = name.innerText;
                playerNameContainer.appendChild(createList);
                event.target.setAttribute('disabled',true);
                event.target.classList.add('btn-secondary');
            }
            else{
                alert("You Can't Added more than Five Players.\n Thank You")
            }

        }
    })
}
// all player cost calculate btn handler and function
document.getElementById('calculate-btn').addEventListener('click',function(){
    const playerNames = document.getElementById('player-name-container');
    const playersNumbers = playerNames.childElementCount;
    if (playersNumbers<=0) {
        alert("No Player Selected on your Top Players List");
        return;
    }
    else{
        const perPlayerCost = getInputValue('per-player');
        const valiedPlayerCost = validationValue(perPlayerCost);
        if (isNaN(valiedPlayerCost)) {
            setTextValue('player-expense','00' );
            return
        }
        else{
            const totalCost = valiedPlayerCost * playersNumbers;
            const fixedTotalCost = fixedAmout(totalCost);
            setTextValue('player-expense', fixedTotalCost);
        }        
    }
    document.getElementById('per-player').value = '';
});
// total cost calculate btn handler and function
document.getElementById('calculate-total').addEventListener('click',function(){
    const managerCost = getInputValue('manager-cost');
    const coachCost = getInputValue('coach-cost');
    if (isNaN(validationValue(coachCost)) || isNaN(validationValue(managerCost))) {
        setTextValue('total-cost', '00');
        return;
    }
    else{
        const playerExpense = getInnerText('player-expense');
        const totalCost = validationValue(managerCost) + validationValue(coachCost) + playerExpense;
        const fixedTotalcost = fixedAmout(totalCost);
        setTextValue('total-cost', fixedTotalcost);
    }
    document.getElementById('manager-cost').value = '';
    document.getElementById('coach-cost').value = '';
});