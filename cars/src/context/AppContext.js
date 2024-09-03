import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { CAR_API_URL} from "../constants/CAR_API_URL";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [cars, setCars] = useState();

  const getCars = async () => {
    try {
      const resp = await axios.get(CAR_API_URL);
      setCars(resp.data);
    } catch (err) {
      console.log(err);
    }
  };


  
  useEffect(() => {
    getCars();
  }, []);

  return (
    <AppContext.Provider value={{ cars, getCars }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
