<<<<<<< HEAD
import React from "react";
import { useContextGlobal } from "../Components/utils/ContextGlobal";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
=======
import React from 'react'
import { useContextGlobal } from '../Components/utils/ContextGlobal'
import Card from '../Components/Card'
>>>>>>> a9c4eb86b8cea459e6dccff58135c5e2ec09886a

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { dentist } = useContextGlobal();

  return (
    <main className="">
      <h1>Home</h1>
<<<<<<< HEAD
      <div className="card-grid">
        {dentist.map((dentist) => (
          <Link to={`/detail/${dentist.id}`} key={dentist.id}>
            <Card key={dentist.id} />
          </Link>
        ))}
=======
      <div className='card-grid'>
        {dentist.map(dentist => (<Card key={dentist.id} data={dentist} />))}
>>>>>>> a9c4eb86b8cea459e6dccff58135c5e2ec09886a
      </div>
    </main>
  );
};

export default Home;
