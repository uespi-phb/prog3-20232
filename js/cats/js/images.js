const catsApiUrl = 'https://api.thecatapi.com/v1'
const catsApiKey = 'live_CqKIlJwmeJk5fHHNrRUOrGQqt35ab51KKvuowcD1qOqVGUhyee8EzXT6pNKXCSKL'

const main = () => {
  const params = new URLSearchParams(window.location.search)
  const breed = params.get('breed')
  const count = params.get('count') ?? 5

  if (!breed) {
    return
  }

  const breedName = document.getElementById('breed-name')
  breedName.innerHTML = params.get('breed-name')

  const xhr = new XMLHttpRequest()
  xhr.open('get', `${catsApiUrl}/images/search?limit=${count}&breed_ids=${breed}`)
  xhr.setRequestHeader('X-Api-Key', catsApiKey)
  xhr.responseType = 'json'
  xhr.onload = () => {
    if (xhr.status != 200) {
      return
    }

    const elems = xhr.response.map((data) => `<img src="${data.url}">`)
    const images = document.getElementById('images')
    images.innerHTML = elems.join('\n')
    console.log(elems)
  }
  xhr.send()
}

window.addEventListener('DOMContentLoaded', main)