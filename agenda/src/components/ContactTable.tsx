import styles from './ContactTable.module.css'
import Contact from '../models/contact'
import { Action, ActionIcons } from './Actions'

interface ContactTableProps {
  contacts: Contact[]
  onEdit?: (contact: Contact) => void
  onDelete?: (contact: Contact) => void
}

export default function ContactTable(props: ContactTableProps) {

  function renderActions(contact: Contact) {
    return (
      <span className={styles.actions}>
        {
          props.onEdit 
          ? <span className={styles.edit} onClick={(_) => props.onEdit(contact)}>{ActionIcons.edit}</span> 
          : <></>
        }
        {
          props.onDelete 
          ? <span className={styles.remove} onClick={(_) => props.onDelete(contact)}>{ActionIcons.remove}</span> 
          : <></>
        }
      </span>
    )
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Telefone</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {props.contacts.map((contact, index) => {
          return (
            <tr key={`ctkey_${index}`}>
              <td style={{ textAlign: 'center' }}>{contact.id}</td>
              <td style={{ textAlign: 'left' }}>{contact.name}</td>
              <td style={{ textAlign: 'left' }}>{contact.email}</td>
              <td style={{ textAlign: 'right' }}>{contact.phone}</td>
              <td>{renderActions(contact)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
