
import { Inter } from 'next/font/google'

import Questao from '@/components/Questao'
import QuestaoModel from '@/model/questao'
import RespostaModel from '@/model/resposta'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const questaoTeste = new QuestaoModel(
    1,
    'Melhor cor?',
    [
      RespostaModel.errada('Vermelho'),
      RespostaModel.errada('Verde'),
      RespostaModel.errada('Azul'),
      RespostaModel.certa('Preto'),
    ]
  )
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <Questao
        valor={questaoTeste}
      />
    </div>
  )
}
