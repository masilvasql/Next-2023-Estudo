import '../app/globals.css'
import PortaModel from "@/model/porta"
import styles from "@/styles/Porta.module.css"
import Presente from "./Presente"


interface PortaProps {
    value: PortaModel
    onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps) {
    const porta = props.value
    const selecionada = porta.Selecionada && !porta.Aberta ? styles.selecinada : ''

    const alternarSelecao = () => props.onChange(porta.alternarSelecao())
    const abrir = (e: any) => {
        e.stopPropagation()
        props.onChange(porta.abrir())
    }

    function renderizarPorta() {
        return (

            <div className={styles.porta}>
                <div className={styles.numero}>{porta.Numero}</div>
                <div className={styles.macaneta}
                    onClick={abrir}
                ></div>
            </div>
        )
    }

    return (
        <div className={styles.area} onClick={alternarSelecao}>
            <div className={`${styles.estrutura} ${selecionada}`}>
                {porta.Fechada ? renderizarPorta() : porta.TemPresente ? <Presente/> : false}
            </div>
            <div className={styles.chao}></div>
        </div>
    )

}