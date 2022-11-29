/*----Message Form----*/ 
const scriptURL = 'https://script.google.com/macros/s/AKfycbxwMsEYMyzGCme1M-FEnkMgsoo3TG2oY3qO11t4lC2JPUEqYtDm-TXb2bHofDSNwo68sA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{ 
        msg.innerHTML = " "
        setTimeout(function(){
        msg.innerHTML = ""
    },)
    form.reset()
    },)

    .catch(error => console.error('Error!', error.message))
})
/*----End Message Form----*/ 