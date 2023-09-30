import styles from '@/styles/EntradaNumerica.module.css'
import { type } from 'os'

interface EntradaNumericaProps {
    text: string
    value: number
    onChange: (valorNovo: number) => void
}
export default function EntradaNumerica(props: EntradaNumericaProps) {

    const dec = () => props.value > 1 && props.onChange(props.value - 1)
    const inc = () => props.onChange(props.value + 1)

    return (
        <div className={styles.entradaNumerica}>
            <span className={styles.text}>{props.text}</span>
            <span className={styles.value}>{props.value}</span>
            <div className={styles.botoes}>
                <button className={styles.btn} onClick={dec}>-</button>
                <button className={styles.btn} onClick={inc}>+</button>
            </div>
        </div>
    )
}