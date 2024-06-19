import React, { useEffect, useRef, useState } from 'react';
import TareaInput from '../tarea';
import "./lista.css"
import { FaPlus } from "react-icons/fa";
import { HiMiniXMark } from "react-icons/hi2";

export default function Lista({id}){
    
    const [tarea,setTarea] = useState([])
    const [estado,setEstado] = useState(false)
    const referenciaInput = useRef()
    const [titulo,setTitulo] = useState()
    const [deleted,setDeleted] = useState(false)

    const handleClick = () =>{

      const newId = tarea.length;
      setTarea([...tarea, {idC:`${titulo}-${id}-${newId}`}])
    }

    const handleDrop = (e) => {


         if(e.target.className == "contenedor"){
            e.preventDefault()
            const data = e.dataTransfer.getData('text/plain')//toma el dato que le pase desde el setData
            const draggedElement = document.getElementById(data);//establece el hijo a partir de el dato que le pase, en este caso un id
            e.target.appendChild(draggedElement)
        }
        
      }
    
      const handleDragOver = (e) => {
        e.preventDefault();
      };


      const handleClick0 = () => {

        const newTitulo = referenciaInput.current.value

        if(newTitulo){

            setTitulo(newTitulo)
            setEstado(true)  
        }

      }
      const handleDelete= () =>{

        setDeleted(true)

      }

      return(
        <>

          {estado ? 
          
          <div className="lista">
          <h1>{titulo}</h1>
          <div 
            id={id} 
            className={`contenedor ${deleted ? "deleted" : ""}`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}

          >   
          {tarea.map((tarea, index) => (
          
            <TareaInput key={index} idC={tarea.idC} />
          
          ))}    
          </div>
          <div className="contenedorBotones">
            <button className='buttonTarea' onClick={handleClick}><FaPlus /> <span className='text-b'>Agregar tarea</span></button>
            <button className='iconButton' onClick={handleDelete}><HiMiniXMark /></button>
          </div>
          </div>

          :
                    
          <div className="contenedorInputs">
              <input className='input0' type="text" placeholder='ingrese el nombre de la lista' ref={referenciaInput} />
              <button className='boton' onClick={handleClick0}>Agregar lista</button>
          </div>

          } 

        </>
      )
}
