
const main = () => {
  const addButton = document.getElementById('add')
  addButton.addEventListener('click', addInterest)

  const textElem = document.getElementById('data')
  textElem.addEventListener('keydown', (event) => {
    console.log(event)
    if (event.key == 'Enter') {
      addInterest()
    } else if (event.key == 'Escape') {
      textElem.value = ''
    }
  })
}

const addInterest = () => {
  const elemText = document.getElementById('data')
  const text = elemText.value.trim()
  if (text === '') {
    return
  }

  const close = '✖';
  const list = document.querySelector('ol')
  const item = document.createElement('li')

  item.innerHTML = `${text} <span>${close}</span>`
  list.appendChild(item)
  item.firstElementChild.addEventListener('click', () => item.remove())

  elemText.value = ''
  elemText.focus()
}

window.addEventListener('DOMContentLoaded', main)