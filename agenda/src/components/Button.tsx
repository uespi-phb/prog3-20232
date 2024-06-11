'use client'

import styles from './Button.module.css'

interface ButtonProps {
  color?: string
  bgColor?: string
  onClick?: () => void
  children?: any
}

export default function Button(props: ButtonProps) {
  console.log(props)

  const buttonStyle = { 
    backgroundColor: props.bgColor, 
    color: props.color,
  }

  return (
    <div className={styles.button} 
         style={buttonStyle}
         onClick={props.onClick}>
      {props.children}
    </div>
  )
}
