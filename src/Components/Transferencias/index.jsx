import { useEffect, useState } from 'react';
import api from '../../Services/Api'
import formatDate from '../../Services/Utils';


const Transfererencia = (props) => {

    const [transferencia, setTransferencia] = useState([])

    useEffect(() => {
        api
            .get("/transferencias")
            .then((response) => setTransferencia(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    return (
        <div>
            <div className='d-flex justify-content-evenly fs-4 mb-3'>
                <span><strong>Saldo:</strong>  {transferencia.reduce((prev, curr) => prev + curr.valor, 0)}</span>
                <span><strong>Saldo por Periodo:</strong>  {transferencia.reduce((prev, curr) => prev + curr.valor, 0)}</span>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th className="col">DATA</th>
                        <th className="col">VALOR</th>
                        <th className="col">TIPO</th>
                        <th className="col">NOME OPERADOR TRANSACIONADO</th>
                    </tr>
                </thead>
                <tbody>
                    {transferencia.map(trans => (
                        <tr key={trans.id}>
                            <td>{formatDate(trans.dataTransferencia)}</td>
                            <td>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(trans.valor)}</td>
                            <td>{trans.tipo}</td>
                            <td>{trans.nomeOperadorTransacao}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default Transfererencia;