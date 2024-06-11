'use client'

import Button from '../components/Button'
import Card from '../components/Card'

export default function Home() {

  function clicked() {
    console.log('Clicked!')
  }

  return (
    <Card title="Lista de Contatos">    
      <div style={{ float: 'right' }}>
        <Button bgColor="darkgreen" color="white"
                onClick={clicked}>
            Novo Contato
        </Button>      
      </div>
     
      <h3>Este é o conteúdo do Card</h3>
      <p>É simples</p>
      <p>É versátil</p>
      <p>É elegante</p>
    </Card>
  )
}
