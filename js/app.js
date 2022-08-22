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