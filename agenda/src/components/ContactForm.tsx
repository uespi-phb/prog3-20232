'use client'

import styles from './ContactForm.module.css'
import { useState } from 'react'
import Contact from '../models/contact'
import Input from './Input'
import Button from './Button'
import Card from './Card'

interface ContactFormProps {
  contact?: Contact
  onSave?: (contact: Contact) => void
  onCancel?: (contact: Contact) => void
}

export default function ContactForm(props: ContactFormProps) {
  const title = props.contact ? 'Editar' : 'Novo'

  const [name, setName] = useState(props.contact?.name ?? '')
  const [email, setEmail] = useState(props.contact?.email ?? '')
  const [phone, setPhone] = useState(props.contact?.phone ?? '')

  // function saveContact() {
  //   const contact = new Contact(name, email, phone, props.contact?.id)
  //   props.onSave?.(contact)
  // }

  // function cancelContact() {
  //   props.onCancel?.(props.contact)
  // }

  return (
    <div className={styles.form}>
      <Input label="Nome" value={name} onChange={setName}/>
      <Input label="E-mail" value={email} onChange={setPhone}/>
      <Input label="Telefone" value={phone} onChange={setPhone}/>
    </div>
  )
}

{/* <div className={styles.form}>
{props.contact?.id ? <Input label="Id" value={props.contact.id} readOnly/> : <></>}
<Input label="Nome" value={name} onChange={setName}/>
<Input label="E-mail" value={email} onChange={setEmail}/>
<Input label="Telefone" value={phone} onChange={setPhone}/>
<div>
  <Button bgColor='blue' onClick={saveContact}>Gravar</Button>
  <Button bgColor='#505050' onClick={cancelContact}>Cancelar</Button>
</div>
</div> */}

