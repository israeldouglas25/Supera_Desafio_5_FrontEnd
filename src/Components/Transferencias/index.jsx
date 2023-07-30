import { useEffect, useState } from 'react';
import api from '../../Services/Api'
import formatDate from '../../Services/Utils';
import Paginacao from '../Paginacao';


const Transfererencia = () => {

    const formatNumber = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

    const [transferencia, setTransferencia] = useState([]);
    const [transfPerPage] = useState(4);
    const [currentPage, setCurrentPage] = useState(0);

    const pages = Math.ceil(transferencia.length / transfPerPage);
    const startIndex = currentPage * transfPerPage;
    const endIndex = startIndex + transfPerPage;
    const currentTransf = transferencia.slice(startIndex, endIndex);

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
                <span><strong>Saldo:</strong>  {formatNumber.format(transferencia.reduce((prev, curr) => prev + curr.valor, 0))}</span>
                <span><strong>Saldo por Periodo:</strong>  {formatNumber.format(transferencia.reduce((prev, curr) => prev + curr.valor, 0))}</span>
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
                    {currentTransf.map(trans => (
                        <tr key={trans.id}>
                            <td>{formatDate(trans.dataTransferencia)}</td>
                            <td>{formatNumber.format(trans.valor)}</td>
                            <td>{trans.tipo}</td>
                            <td>{trans.nomeOperadorTransacao}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Paginacao pages={pages} setCurrentPage={setCurrentPage} />
        </div>
    )

}

export default Transfererencia;