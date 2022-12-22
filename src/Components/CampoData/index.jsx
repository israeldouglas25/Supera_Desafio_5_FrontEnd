import './CampoData.css'

const Campotexto = (props) => {

    const aoDigitar = (event) => {
        props.aoAlterado(event.target.value)
    }
    
    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitar} type={props.type} placeholder={props.placeholder} />
        </div>
    )
}

export default Campotexto;