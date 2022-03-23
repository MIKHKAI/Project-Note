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
            // ajaxSend(dataF)
            fetch('/add', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({dataF})
            }).then(res => res.json())
            .then(data => {
                form.reset()
                const html = data.map(c => {
                    return `
                        <div class="panel">
                        <div class="panel-head">
                            <p class="panel-title">${c.name}</p>
                        </div>
                        <div class="panel-body">
                            <p class="multi-line">${c.text}</p>
                        
                        </div>
                        <div class="panel-footer w-panel-footer">
                            <button class="panel-delet" name="${c.id}">
                                Удалить
                            </button>
                        </div>
                        </div>
                    `
                }).join('')
                console.log(document.querySelector('.tbody'))
                $card.querySelector('.tbody').innerHTML = html
            })
        .catch((err) => console.error(err))
    }
})

let $button = document.querySelector('.tbody');
$button.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON') {
        const form = document.querySelector('form')
        e.preventDefault();

        if (e.target.name === '' || e.target.name === null) {
            return false
        } 
    }
})