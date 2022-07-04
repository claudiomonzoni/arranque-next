import axios from "axios";
import { useContext, createContext, useReducer } from "react";
import { dataReducer } from "../reducer/dataReducer";

const DataContext = createContext();

// crear funcion para no estar importando useContext
export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataProvider = ({children}) => {
  const laurl = "https://jsonplaceholder.typicode.com/users/";
  const stateInicial = [
  {
    datos: []
  }
  ];
  const [datos, dispatch] = useReducer(dataReducer, stateInicial);

  const getDatos = async () => {
    const res = await axios.get(laurl);
    dispatch({
      type: "GET_DATOS",
      payload: res.data,
    });
  };

  return (
    <DataContext.Provider
      value={{
        datos,
        getDatos,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
