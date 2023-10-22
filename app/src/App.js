import { useState } from 'react';
import Header from './componentes/Header/Header.js';
import './App.css';
import Formulario from './componentes/Formulario/Formulario.js';
import Ghost from './componentes/Ghost/index.js';
import Card from './componentes/Card/Index.js';

function App() {

  const  [mostrarFormulario, actualizarFormulario]=useState(true)

  const cambiarMostrar=()=>{
    actualizarFormulario(!mostrarFormulario)
  }

  return (
    <div>
      <Header/>
      {mostrarFormulario && <Formulario/>}
      <Ghost cambiarMostrar={cambiarMostrar}></Ghost>
    </div>
  );
}

export default App;
