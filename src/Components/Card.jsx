import React from "react";
import { useReducer } from "react";
import { useEffect, useState, createContext, useContext } from "react";
import { useContextGlobal } from "./utils/ContextGlobal";

const Card = ({ data }) => {
  const { theme } = useContextGlobal();

  console.log(data);

  const addFav = () => {
    localStorage.setItem("card", JSON.stringify(data));
  };

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      <h3>{data.id}</h3>
      <img src="./images/doctor.jpg" alt="img-doc" className="img-doc" />
      <h4>{data.name}</h4>
      <h5>{data.username}</h5>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton" id={theme.theme}>
        Add fav
      </button>
    </div>
  );
};

export default Card;
