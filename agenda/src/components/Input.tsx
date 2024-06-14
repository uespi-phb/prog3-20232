import { ChangeEvent } from 'react'

interface InputProps {
  label: string
  value: any
  readOnly?: boolean
  onChange?: (value: any) => void
}

export default function Input(props: InputProps) {
  const type = typeof(props.value) === 'number' ? 'number' : 'text';

  function onInputChange(event: ChangeEvent<HTMLInputElement>) {
    
    if(!props.onChange) {
      return
    }
    const value = (type === 'number') ? +event.target.value : event.target.value
    props.onChange(value)
  }

  return (
    <>
      <label>{props.label}</label>
      <input 
        type={type}
        value={props.value}
        readOnly={props.readOnly}
        onChange={onInputChange}
      />
    </>
  )
}