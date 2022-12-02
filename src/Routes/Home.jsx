import React from 'react'
import { useContext } from 'react'
import ContextGlobal from '../Components/utils/ContextGlobal'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const dentist = useContext( ContextGlobal )

  console.log(dentist);

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {dentist.map(dentist => (<Card data={dentist} />))}
      </div>
    </main>
  )
}

export default Home