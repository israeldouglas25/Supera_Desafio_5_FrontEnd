
const Campotexto = (props) => {

    const aoDigitar = (event) => {
        props.aoAlterado(event.target.value)
    }
    
    return(
        <div>
            <label className="form-label">{props.label}</label>
            <input className="form-control" value={props.valor} onChange={aoDigitar} type={props.type} placeholder={props.placeholder} />
        </div>
    )
}

export default Campotexto;