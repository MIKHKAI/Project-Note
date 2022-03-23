var dataF = {}
let $card = document.querySelector('#card')
const submit = document.querySelector('button[type="submit"]')

submit.addEventListener('click', (e) => {
    const form = document.querySelector('form')
    e.preventDefault();

    const formObj = new FormData(form)
   
    if (form.name.value.length === '' || form.text.value.length === 0 ) {
        return false
    } else {
            formObj.forEach(function(value, key){
                dataF[key] = value;
            });
        }
    
})