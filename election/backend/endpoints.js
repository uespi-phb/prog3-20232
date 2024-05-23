
function candidate(request, response) {
  console.log(request.body)

  const body = [
    {
      name: request.body.name,
      office: 'Deputado Estadual',
      city: 'Parnaíba',
      votes: 12345
    },
    {
      name: 'Cicrano da Silva',
      office: 'Deputado Estadual',
      city: 'Parnaíba',
      votes: 8765
    }
  ]

  response.send(JSON.stringify(body))
}

module.exports = {
  candidate
}
