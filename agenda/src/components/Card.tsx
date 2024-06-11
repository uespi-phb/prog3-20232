import Button from './Button'
import styles from './Card.module.css'

export interface CardProps {
  title: string
  titleColor?: string
  lineColor?: string
  bodyColor?: string
  children?: any
}

export default function Card(props: CardProps) {
  return (
    <div className={styles.card}>
      <h1 className={styles.title} style={{color: props.titleColor}}>Título do Card</h1>
      <hr className={styles.line} style={{color: props.lineColor}}/>
      <div className={styles.body} style={{backgroundColor: props.bodyColor}}>{props.children}</div>
    </div>
  )
}
