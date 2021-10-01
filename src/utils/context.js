import { useState } from "react";
import React from "react";


export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [newData2019, setNewData2019] = useState([]);
  const [newData2018, setNewData2018] = useState([]);
  const [btnSort, setBtnSort]= useState(true);
  const [showAll, setShowAll] = useState(true)

  return (
    <AppContext.Provider value={{ newData2019, setNewData2019, newData2018,setNewData2018, btnSort, setBtnSort,showAll, setShowAll }}>{children}</AppContext.Provider>
  );
}