import { createContext, useState } from "react";

//create the context variable

export const Context = createContext()

//Special component that is going to contain the components that we want to share their datas

export const Datas = ({ children }) => {
  //the datas we gonna share
  const [color, setColor] = useState()

  //The content provider will allows to share datas between all the children components of the Datas container
  return (
    < Context.Provider value={{ color, setColor }} >
      {children}
    </Context.Provider >

  )
}