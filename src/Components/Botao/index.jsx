
const Botao = (props) => {
    return (
        <button type="button" className="btn btn-primary">
            {props.children}
        </button>
    )
}

export default Botao;