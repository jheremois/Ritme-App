import React, { useEffect, useState, createContext } from "react";
import NetInfo from "@react-native-community/netinfo";

let contextValue: any = {
  isConected: true,
}

export const ConectionContext = createContext(contextValue)

export const ConectionProvider = ({ children }: any) => {
  const [conection, setConection] = useState(contextValue)

  useEffect(()=>{
    NetInfo.fetch().then(state => {
      setConection(state.isConnected)
    })
  }, [])

  return (
    <ConectionContext.Provider value={{conection, setConection, ConectionProvider}}>
      {children}
    </ConectionContext.Provider>
  )
}

