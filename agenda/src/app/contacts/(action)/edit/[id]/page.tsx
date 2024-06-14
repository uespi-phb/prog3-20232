'use client'

import Card from '../../../../../components/Card'
import ContactForm from '../../../../../components/ContactForm'
import fakeContacts from '../../../../../models/fake-contacts'

export default function EditContactId(props) {
  return (
    <Card title={`Contato ${props.params.id}`}>
      <ContactForm contact={fakeContacts[0]} />
    </Card>
  )
}