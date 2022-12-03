import axios from "axios";
import { useEffect, useState, createContext, useContext } from "react";

export const initialState = { theme: "", data: [] }; //Esto se usa si lo hacemos con useReducer (creo jeje)

export const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [theme, setTheme] = useState("light"); //Esto lo agregue para hacer el theme con useState, VER!;
  const [dentist, setDentist] = useState([]);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const getDentist = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setDentist(res.data));
  };

  useEffect(() => {
    getDentist();
  }, []);

  return (
    <ContextGlobal.Provider
      value={{
        dentist,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => {
  return useContext(ContextGlobal);
};
