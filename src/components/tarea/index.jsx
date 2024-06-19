import React, { useEffect, useState } from "react";
import { useRef } from "react";
import "./tarea.css"
import { HiOutlinePencil } from "react-icons/hi";
import { FaCheck } from "react-icons/fa";
import { HiMiniXMark } from "react-icons/hi2";
import { FaPlus } from "react-icons/fa";

export default function TareaInput({idC}){

  const [estado,setEstado] = useState(false)
  const referenciaTitulo = useRef(null)
  const [tarea,setTarea] = useState()


  const handleClick = () =>{


    const titulo = referenciaTitulo.current.value 
    if(titulo){
      setTarea(<Tarea tituloProp={titulo} id={idC} categoria="wadw" />)
      setEstado(true)
    }
  }

  return<>

    {estado ?

      tarea
    
    : 
      <div className="contenedorInputs">
      
        <input type="text" className="input" id="referencia" ref={referenciaTitulo} placeholder="Ingrese el titulo de la tarea"/>
        <button className="iconButton" onClick={handleClick}><FaPlus /></button>
      
      </div>
    }
  </>

}

function Tarea({tituloProp,id}){

  const [borrar,setBorrar] = useState(false)
  const [titulo,setTitulo] = useState(tituloProp)
  const [isEditing, setIsEditing] = useState(false)
  const input = useRef()


  const handleDrag = (e) =>{

    const id = e.target.id 
    e.dataTransfer.setData('text/plain', id)

  }


  const handleClick = () => {

    setBorrar(true)


  }

  const handleEditStart = () =>{


    setIsEditing(true)

  }

  const handleEdit = () =>{

    const nuevoTitulo = input.current.value;
    if(nuevoTitulo){
      setTitulo(nuevoTitulo)
      setIsEditing(false)
    }
  }

  return<>
          
    <div
      id={id}
      draggable="true"
      className={`cajaMovil ${borrar ? "deleted" : ""}`}
      onDragStart={handleDrag}
    >
     {isEditing ? 

      <>
        <input type="text" className="input" ref={input} placeholder="Ingrese nuevo titulo" />
        <button className="iconButton" onClick={handleEdit}><FaCheck /></button>

      </>
     :
     
    <>
      <div className="contenedorTitulo">
        {titulo}
      </div>
      <div className={`contenedorBoton`}><button className="iconButton" onClick={handleClick}><HiMiniXMark /></button></div>
      <div className={`contenedorBoton`}><button className="iconButton" onClick={handleEditStart}><HiOutlinePencil /></button></div>
     </>
     } 


    </div>
  
  </>
}