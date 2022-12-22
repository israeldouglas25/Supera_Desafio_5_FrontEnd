import Campotexto from "../CampoData";
import './Formulario.css'

const Formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Pesquise por data ou listar tudo</h2>
                <Campotexto label='Nome' />
                <Campotexto label='Data Inicio' type='date' />
                <Campotexto label='Data Fim' type='date' />
            </form>
        </section>
    )
}

export default Formulario;