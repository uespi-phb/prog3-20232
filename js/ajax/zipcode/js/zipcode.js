window.addEventListener('DOMContentLoaded', () => {
  const zipcode = document.getElementById('zipcode')
  zipcode.addEventListener('keydown', zipCodeKeyDown)
  zipcode.addEventListener('change', zipCodeChanged)
})

const zipCodeKeyDown = (event) => {
  if ((event.key < '0' || event.key > '9') && event.key > 31) {
    event.preventDefault()
  }
}

const zipCodeChanged = (event) => {
  const zipcode = event.target.value
  if (zipcode.length != 8) {
    return
  }

  const xhr = new XMLHttpRequest()
  xhr.open('get', `https://viacep.com.br/ws/${zipcode}/json`, true)
  xhr.responseType = 'json'
  xhr.onload = () => {
    const data = xhr.response
    document.getElementById('address').value = data.logradouro
    document.getElementById('neighbor').value = data.bairro
    document.getElementById('city').value = data.localidade
    document.getElementById('state').value = data.uf
  }
  xhr.send()
}
