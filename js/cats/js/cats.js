const catsApiUrl = 'https://api.thecatapi.com/v1'
const catsApiKey = 'live_CqKIlJwmeJk5fHHNrRUOrGQqt35ab51KKvuowcD1qOqVGUhyee8EzXT6pNKXCSKL'

const main = () => {

  const xhr = new XMLHttpRequest()
  xhr.open('get', `${catsApiUrl}/breeds`)
  xhr.setRequestHeader('X-Api-Key', catsApiKey)
  xhr.responseType = 'json'
  xhr.onload = () => {
    //
  }
  xhr.send()
}

window.addEventListener('DOMContentLoaded', main)