const gmailInput = document.querySelector('#gmail_input')
const gmailBtn = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //Здесь не только gmail.com можно ввести но и например mail.kg 

gmailBtn.addEventListener('click', () => {
    if(gmailInput.value.match(regex)){
        gmailResult.style.color = 'green'
        gmailResult.textContent = 'VALID'
    } else {
        gmailResult.style.color = 'red'
        gmailResult.textContent = 'INVALID'
    }
})



const childBlock = document.querySelector('.child_block')
const parentBlock = document.querySelector('.parent_block')

let pos = 0
function moveRight() {
    const max = parentBlock.clientWidth - childBlock.clientWidth
    if (pos <= max) {
        childBlock.style.left = pos + 'px'
        pos++
        setTimeout(moveRight)
    }
}
moveRight()