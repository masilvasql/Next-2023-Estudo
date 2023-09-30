'use client'

import { useState } from "react";
import Porta from "../../components/Porta";
import PortaModel from "../../model/porta";
import { atualizarPortas, criarPortas } from "../../functions/Portas";

export default function Home() {

  const [p1, setP1] = useState(new PortaModel(1))
  const [portas, setPortas] = useState(criarPortas(8, 2))

  function renderizarPortas() {
    return portas.map(porta => {
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
      <div style={{ display: "flex", flexWrap:'wrap' }}>
        {renderizarPortas()}
      </div>
    )
  }
