import { useState } from "react";
import Botao from "../Botao";
import Campotexto from "../CampoData";
import Transferencias from "../Transferencias";
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [dataInicio, setDataInicio] = useState('')
    const [dataFim, setDataFim] = useState('')

    const aoSalvar = (event) => {
        event.preventDefault()
        props.aoEvent([
            dataInicio,
            dataFim,
            nome
        ])
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Pesquise por data ou click em pesquisar para listar todas as transações</h2>
                <div className='row'>
                    <div className='col'>
                        <Campotexto
                            label='Data Inicio'
                            type='date'
                            valor={dataInicio}
                            aoAlterado={valor => setDataInicio(valor)}
                        />
                    </div>
                    <div className='col'>
                        <Campotexto
                            label='Data Fim'
                            type='date'
                            valor={dataFim}
                            aoAlterado={valor => setDataFim(valor)}
                        />
                    </div>
                    <div className='col'>
                        <Campotexto
                            label='Nome do operador'
                            placeholder='Digite seu nome aqui'
                            valor={nome}
                            aoAlterado={valor => setNome(valor)}
                        />
                    </div>
                    <div className="d-flex justify-content-end my-5">
                        <Botao>
                            Pesquisar
                        </Botao>
                    </div>
                </div>
                <Transferencias />
            </form>
        </section>
    )
}

export default Formulario;