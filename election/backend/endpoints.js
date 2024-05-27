
const sqlite = require('./database')

function sendError(response, status, error) {
  const body = {
    status,
    error
  }
  response.status(status)
  response.send(JSON.stringify(body))
}

function searchCandidate(request, response) {
  console.log(request.body)

  if(!(request.body && 'name' in request.body)) {
    sendError(response, 400, 'Invalid body format')
    return
  }

  const name = request.body.name.toUpperCase()
  const sql = "select cand_nome, cand_status, muni_nome, cand_votos " +
              "from votos_cand_municipio " +
              `where cand_nome like '${name}%' ` +
              "order by cand_nome"

  let data = []

  console.log('ANTES')
  sqlite.db.all(
    sql,
    (error, rows) => {
      if (error) {
        sendError(response, 500, 'Internal server error')
        return
      }

      data = rows.map((cand) => {
        return {
          name: cand.cand_nome,
          office: cand.cand_status,
          city: cand.muni_nome,
          votes: cand.cand_votos
        }
      })
      response.send(JSON.stringify(data))
    }
  )
}

module.exports = {
  searchCandidate
}
