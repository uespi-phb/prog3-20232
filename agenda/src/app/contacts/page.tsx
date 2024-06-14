'use client'

import Button from '../../components/Button'
import Card from '../../components/Card'
import ContactTable from '../../components/ContactTable'
import Contact from '../../models/contact'
import fakeContacts from '../../models/fake-contacts'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  function contactNew() {
    console.log('contactNew')
  }

  function contactEdit(contact: Contact) {
    console.log('contactEdit: ', contact)
  }

  function contactDelete(contact: Contact) {
    console.log('contactDelete: ', contact)
  }


  return (
    <Card title="Lista de Contatos">    
      <div style={{ display: 'flex', justifyContent: 'end', marginBottom: '1rem' }}>
        <Button bgColor="darkgreen" color="white"
                onClick={() => router.push('/contacts/new')}>
            Novo Contato
        </Button>
      </div>
      <ContactTable 
        contacts={fakeContacts}
        onEdit={(contact) => router.push(`/contacts/edit/${contact.id}`)}
        onDelete={(contact) => router.push(`/contacts/delete/${contact.id}`)}
      />
    </Card>
  )
}
