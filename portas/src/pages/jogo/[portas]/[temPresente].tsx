'use client'
import { useEffect, useState } from "react"
import Link from "next/link"

import styles from '@/styles/Jogo.module.css'

import Porta from "@/components/Porta"
import { atualizarPortas, criarPortas } from "@/functions/Portas"
import PortaModel from "@/model/porta"
import { useRouter } from 'next/router'


export default function Jogo() {

    const router = useRouter()

    const [portas, setPortas] = useState([] as PortaModel[])
    const [valido, setValido] = useState(false)

    useEffect(() => {
        getQueryAndSetPortas();
    }, [router?.query])

    useEffect(() => {

        const portas = parseInt(router.query.portas as string)
        const temPresente = parseInt(router.query.temPresente as string)

        const portasValidas = portas >= 3 && portas <= 100
        const temPresenteValido = temPresente >= 1 && temPresente <= portas
        setValido(portasValidas && temPresenteValido)
    }, [portas])

    function getQueryAndSetPortas() {
        const portas = parseInt(router.query.portas as string)
        const temPresente = parseInt(router.query.temPresente as string)
        setPortas(criarPortas(portas, temPresente))
    }


    function renderizarPortas() {
        return  portas.map(porta => {
            return <Porta
                key={porta.Numero}
                value={porta}
                onChange={novaPorta => {
                    setPortas(atualizarPortas(portas, novaPorta))
                }}
            />
        })
    }

    return (
        <div id={styles.jogo}>
            <div className={styles.portas}>
                {valido ? renderizarPortas() : <h2>Valores Inválidos!</h2>}
            </div>
            <div className={styles.botoes}>
                <Link href="/">
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
        </div>
    )
}