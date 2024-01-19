import React, { createContext } from 'react'
export const Data=createContext()
const Total = ({children}) => {
    let name="chandrasekhar"
   
  return (
    <div>
      <Data.Provider value={{name}}>
        {children}
      </Data.Provider>
    </div>
  )
}

export default Total
