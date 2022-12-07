import React from "react";
import logo from '../images/bootstrap-logo.png';

export default function Logo() {
  return (
    <div className="contenedor-logo">
      <img
        className="bootstrap-logo"
        src={logo}
        alt="Logo de bootstrap" 
      />
    </div>
  );
}