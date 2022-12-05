import React from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const card = localStorage.getItem("card");
  const parsedCard = JSON.parse(card);
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        <div className="card">
          <h3>{parsedCard.id}</h3>
          <img src="./images/doctor.jpg" alt="img-doc" className="img-doc" />
          <h4>{parsedCard.name}</h4>
          <h5>{parsedCard.username}</h5>
        </div>
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
