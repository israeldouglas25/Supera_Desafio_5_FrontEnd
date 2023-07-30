import { useState } from 'react';
import Formulario from './Components/Formulario';

function App() {

  const [dados, setDados] = useState([])

  const pegarDados = (dado) => {
    console.log(dado)
    setDados([...dados, dado])
  }

  return (
    <div>
      <Formulario aoEvent={dado => pegarDados(dado)} />
    </div>
  );
}

export default App;
