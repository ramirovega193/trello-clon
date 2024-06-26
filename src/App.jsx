import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import Lista from './components/lista'
import Tarea from './components/tarea'
import './App.css';

function App() {

  const [listas, setLista] = useState([])
  
  const handleClick = () =>{

    const id = listas.length +1;
    setLista([...listas, <Lista key={id} id={id} />])

  }
 
  return(
      <>
      <nav>
        <h1 className='titulo'>V-oard</h1>
      </nav>
      <section className='flex'>
      {listas.map((lista, index) => ( 

          <div className="contenedorLista" key={index}>{lista}</div>

      ))}

      <button className='botonListas' onClick={handleClick}>Agregar lista</button>
      </section>
    </>
  )



}

export default App;




