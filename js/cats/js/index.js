const catsApiUrl = 'https://api.thecatapi.com/v1'
const catsApiKey = 'live_CqKIlJwmeJk5fHHNrRUOrGQqt35ab51KKvuowcD1qOqVGUhyee8EzXT6pNKXCSKL'

const main = () => {

  const xhr = new XMLHttpRequest()
  xhr.open('get', `${catsApiUrl}/breeds`)
  xhr.setRequestHeader('X-Api-Key', catsApiKey)
  xhr.responseType = 'json'
  xhr.onload = () => {
    if (xhr.status != 200) {
      return;
    }

    const breeds = document.getElementById('breed')
    breeds.onchange = () => {
      const breedName = document.getElementById('breed-name')
      breedName.value = breeds.options[breeds.selectedIndex].text
    }

    const options = xhr.response.map(
      (breed) => `<option value="${breed.id}">${breed.name}</option>`
    )
    breeds.innerHTML = options.join('')
  }
  xhr.send()
}

window.addEventListener('DOMContentLoaded', main)
