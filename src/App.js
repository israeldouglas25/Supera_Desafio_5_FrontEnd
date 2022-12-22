import { useState } from 'react';
import Formulario from './Components/Formulario';

function App() {

  const [transferencias, setTransferencias] = useState([])

  const listaTransferencia = (transferencia) => {
    console.log(transferencia)
    setTransferencias([...transferencias, transferencia])
  }

  return (
    <div className="App">
      <Formulario aoEvent={transferencia => listaTransferencia(transferencia)} />
    </div>
  );
}

export default App;
