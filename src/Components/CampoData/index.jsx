import './CampoData.css'

const Campotexto = (props) => {
    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input type={props.type} placeholder={props.placeholder} />
        </div>
    )
}

export default Campotexto;