console.log('Calculator');

let string = ''
let buttons = document.querySelectorAll('.button')
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {

        if (e.target.innerHTML == '=') {
            string = eval(string)
            let input = document.querySelector('.input')
            input.value = string
        }
        else if (e.target.innerHTML == 'C') {
            string = ''
            let input = document.querySelector('.input')
            input.value = string
        }
        else {

            console.log(e.target);
            string = string + e.target.innerHTML

            let input = document.querySelector('.input')
            input.value = string
        }
    })
})

