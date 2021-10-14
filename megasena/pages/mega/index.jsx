import { gerar } from '../../components/gerarNumero'
import Display from '../../components/displayNumero'
import { useState } from 'react'

export default function megaSena(){

    const [numeros, setNumeros] = useState([])
    useState(() => {setNumeros(gerar())}, [])

    //Display das bolinhas
    function renderizarNumeros() {
        return numeros.map(
            numero => <Display key={numero} num={numero} />
        )
    }

    return(
    <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }}>
        <h1>Simulador de Mega-Sena</h1>
        <h2>O resultado foi!</h2>
        <div style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            }}>
            {renderizarNumeros()}
        </div>
        <div>
            <button class="button button1" onClick={() => setNumeros(gerar())}>Gerar Aposta</button>
        </div>
    </div>
    )
}