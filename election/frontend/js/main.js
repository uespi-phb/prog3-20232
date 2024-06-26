
function onNameChange(event) {
  const xhr = new XMLHttpRequest()

  xhr.open('POST', '/candidate', true)
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
  xhr.onload = (event) => {
    onNameResponse(xhr, event)
  }

  const body = {
    name: event.target.value
  }
  const json = JSON.stringify(body)
  xhr.send(json)  // '{"name":"maria"}'
}

/*
<tr>
<td>XICÃO</td>
<td>Deputado</td>
<td>BREJO</td>
<td>436</td>
</tr>
*/

function onNameResponse(xhr, event) {
  if (xhr.status != 200) {
    return
  }

  const data = JSON.parse(xhr.response)

  const tbody = document.getElementById('result-body')
  tbody.innerHTML = ''

  const table = document.getElementById('result-table')
  if (data.length == 0) {
    table.style.display = 'none'
    return
  }

  let totalVotes = 0

  data.forEach((cand) => {
    totalVotes += cand.votes

    const trElem = document.createElement('tr')
    const votes = Intl.NumberFormat('pt-br').format(cand.votes)
    trElem.innerHTML = `<td>${cand.name}</td><td>${cand.office}</td><td>${cand.city}</td><td>${votes}</td>`
    tbody.appendChild(trElem)
  })

  const tfoot = document.getElementById('result-footer')
  tfoot.innerHTML = ''

  const trElem = document.createElement('tr')
  const votes = Intl.NumberFormat('pt-br').format(totalVotes)

  trElem.innerHTML = `<td></td><td></td><td>TOTAL</td><td>${votes}</td>`
  tfoot.appendChild(trElem)

  table.style.display = 'block'
}

function registerEvent(config) {
  const input = document.getElementById(config.inputName)
  if (!input) {
    return false
  }

  input.addEventListener('input', config.eventListener)

  return true
}

registerEvent({
  inputName: 'name',
  eventListener: onNameChange
})
