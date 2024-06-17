import React, { useEffect, useState } from "react";
import { useRef } from "react";
import "./tarea.css"
export default function TareaInput({idC}){

  const [estado,setEstado] = useState(false)
  const referenciaTitulo = useRef(null)
  const [tarea,setTarea] = useState()


  const handleClick = () =>{


    const titulo = referenciaTitulo.current.value 
    if(titulo){
      setTarea(<Tarea titulo={titulo} id={idC} categoria="wadw" />)
      setEstado(true)
    }
  }

  return<>

    {estado ?

      tarea
    
    : 
      <div className="contenedorInputs">
      
        <input type="text" className="input" id="referencia" ref={referenciaTitulo} placeholder="Ingrese el titulo de la tarea"/>
        <button onClick={handleClick}>+</button>
      
      </div>
    }
  </>

}

function Tarea({titulo,id}){

  

  const handleDrag = (e) =>{

    const id = e.target.id 
    if(e.target.className == "cajaMovil"){
      e.dataTransfer.setData('text/plain', id)
    }
  }
  
  return<>
          
    <div
      id={id}
      draggable="true"
      className="cajaMovil"
      onDragStart={handleDrag}
    >
      {titulo}
    </div>
  
  </>
}