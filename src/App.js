import React from 'react';
// import FormHook from './components/FormHook'
import Saludo from './components/Saludo'
import Comentario from './components/Comentario'

function App() {

  const sujeto = {
    nombre: 'Pedrito',
    urlImage: 'https://via.placeholder.com/64',
    texto: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
  }

  return (
    <div className="container mt-5">
        <h1>Components</h1>
        <Saludo persona="Juanito" />
        <Saludo persona="Ignacio" />
        <Saludo persona="Catalina" />
        <Comentario sujeto={sujeto} />
        <Comentario sujeto={sujeto} />
    </div>
  );
}

export default App;
