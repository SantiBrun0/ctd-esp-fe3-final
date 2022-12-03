import axios from "axios";
import { useEffect, useState, createContext, useContext } from "react";

const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [theme, setTheme] = useState("light");
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
