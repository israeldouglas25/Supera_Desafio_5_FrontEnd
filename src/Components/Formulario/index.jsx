import { useState } from "react";
import Botao from "../Botao";
import Campotexto from "../CampoData";
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [dataInicio, setDataInicio] = useState('')
    const [dataFim, setDataFim] = useState('')

    const aoSalvar = (event) => {
        event.preventDefault()
        props.aoEvent([
            nome,
            dataInicio,
            dataFim
        ])
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Pesquise por data click em pesquisar</h2>
                
                <Campotexto 
                label='Data Inicio' 
                type='date' 
                valor={dataInicio}
                aoAlterado={valor => setDataInicio(valor)}
                />
                <Campotexto 
                label='Data Fim' 
                type='date' 
                valor={dataFim}
                aoAlterado={valor => setDataFim(valor)}
                />
                <Campotexto 
                label='Nome do operador' 
                placeholder='Digite seu nome aqui'
                valor={nome}
                aoAlterado={valor => setNome(valor)}
                />
                <Botao>
                    Pesquisar
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;