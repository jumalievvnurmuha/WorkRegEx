const phoneInput = document.querySelector('#phone_input')
const phoneBtn = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regex = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/;

console.log(phoneResult);
phoneBtn.addEventListener('click', () => {
    if(phoneInput.value.match(regex)){
        phoneResult.style.color = 'green';
        phoneResult.textContent = 'COOl'
    }else{
        phoneResult.style.color = 'red';
        phoneResult.textContent = 'NOT COOl'
    }
})
