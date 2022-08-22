const nameContainer = document.getElementById('player-name-container');
const pBtn = document.getElementsByClassName('p-btn');
for(const btn of pBtn){
    btn.addEventListener('click',function(event){
        const pName = event.target.parentNode.querySelectorAll('.p-name');
        for(const player of pName){
            const nameCount = nameContainer.childElementCount;
            if (nameCount<5) {
                const createList = document.createElement('li');
                createList.classList.add('fw-bold')
                createList.innerText = player.innerText;
                nameContainer.appendChild(createList);
                event.target.setAttribute('disabled',true);
                event.target.classList.add('btn-secondary');
            }
            else{
                alert("You Can't Added more than Five Players.\n Thank You")
            }

        }
    })
}
document.getElementById('calculate-btn').addEventListener('click',function(){
    const playerName = document.getElementById('player-name-container');
    const playersNumbers = playerName.childElementCount;
    if (playersNumbers<=0) {
        alert("No Player Selected on your Top Players List");
        return;
    }
    else{
        const perPlayerCost = getInputValue('per-player');
        const valiedPlayerCost = validationValue(perPlayerCost);
        if (isNaN(valiedPlayerCost)) {
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

document.getElementById('calculate-total').addEventListener('click',function(){
    const managerCost = getInputValue('manager-cost');
    const coachCost = getInputValue('coach-cost');
    // const valiedManagerCost = ;
    // const valiedCoachCost = ;
    if (isNaN(validationValue(coachCost)) || isNaN(validationValue(managerCost))) {
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
    
})