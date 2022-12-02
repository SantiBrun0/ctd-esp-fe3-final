import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  
  const [dentist, setDentist] = useState([])

  const getDentist = () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then( res => setDentist(res.data) )
  }

  useEffect(() => {
    getDentist()
  })
  

  return (
    <ContextGlobal.Provider value={{
      dentist
    }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider