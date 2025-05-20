import { createContext, useEffect, useState } from "react";
import profesoras from "../datos/Profesoras";

//built 
export const Context = createContext()

export const Datas = ({ children }) => {

  //datas that we want to share
  const [idioma, setIdioma] = useState(0)
  const [profesora, setProfesora] = useState(profesoras[0])

  //To avoid infinite loop rendering we must use useEffect()
  //useEffect(() => {
  //setProfesora(profesoras[idioma])
  //}, [idioma])

  //{{}}, fisrt tell that si JS, 2nd tells that we're sharing an object
  return (
    <Context.Provider value={{ idioma, setIdioma, profesora, setProfesora }}>
      {children}
    </Context.Provider>
  )
}