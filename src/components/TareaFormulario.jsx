import React, { useState } from "react";
import "../styles/TareaFormulario.css";
//npm install uuid para instalar paquete que generar id's unicos
import { v4 as uuidv4 } from "uuid";

export default function TareaFormulario(props) {
  const [input, setInput] = useState("");

  const manejarCambio = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    //console.log("Enviando form...");
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };
    //console.log(tareaNueva);
    //
    props.onSubmit(tareaNueva);
  };

  return (
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <input
        className="tarea-input"
        type="text"
        placeholder="Write a Task"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="tarea-boton">Add Task</button>
    </form>
  );
}
