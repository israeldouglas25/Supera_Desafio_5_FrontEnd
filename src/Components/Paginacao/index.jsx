const Paginacao = ({ pages, setCurrentPage }) => {
    return (
        <div>
            {Array.from(Array(pages), (trans, index) => {
                return (
                    <button
                        key={index}
                        value={index}
                        onClick={(e) => setCurrentPage(Number(e.target.value))}> {index + 1}
                    </button>
                )
            })}
        </div>
    )
}

export default Paginacao;