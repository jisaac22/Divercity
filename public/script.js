
const subBtn = document.querySelector('.subscribe')


async function createSub(event){
  event.preventDefault()
  const sub_name = document.querySelector('.inputName').value;
  const email = document.querySelector('.inputEmail').value
  const response = await fetch('/', {
    method: 'POST',
    body: JSON.stringify({
      sub_name,
      email 
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if(response.ok){
    alert('Thanks for subscribing!!')
    sub_name.textContent = ''
    email.textContent = ''
  } else {
    alert('Failed')
  }
} 

subBtn.addEventListener('click', createSub)