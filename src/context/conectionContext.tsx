import React, { useEffect, useState, createContext } from "react";
import NetInfo from "@react-native-community/netinfo";

let contextValue: any = {
  isConected: true,
}

export const Datacontext = createContext(contextValue)

export const ConectionContext = ({ children }: any) => {
  const [data, setData] = useState(contextValue)

  useEffect(()=>{
    NetInfo.fetch().then(state => {
      setData(state.isConnected)
    })
  }, [])

  return (
    <Datacontext.Provider value={{data, setData, ConectionContext}}>
      {children}
    </Datacontext.Provider>
  )
}

