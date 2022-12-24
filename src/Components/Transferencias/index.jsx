import { useEffect, useState } from 'react';
import api from '../../Services/Api'


const Transfererencia = () => {

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
                            <td>{trans.dataTransferencia}</td>
                            <td>{trans.valor}</td>
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