
// to popUp Button for Rules
const rulesBtn = document.querySelector('.rulesBtn')
const RulesPopUp = document.querySelector('.RulesPopUp')
const closeBtn = document.querySelector('.closeBtn')

rulesBtn.addEventListener('click',()=>{
    RulesPopUp.classList.toggle('hide')
})

closeBtn.addEventListener('click',()=>{
    RulesPopUp.classList.toggle('hide')

})