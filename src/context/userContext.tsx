import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { FC, useContext, useState } from "react";
import { UserType } from "@shared/interfaces/user.type";
import { getCurrentUser } from "@src/services/User.services";

interface userData{
  user_token:             string | null
  user:                   UserType | null
}

interface userContext{
  userData:               userData
  setUser_token?:         (user_token: string) => void
  setUser?:               (user: UserType) => void
  //saveCredentials?:       (user_token?: string | null, user?: UserType | null) => Promise<void>;
  saveCredentials?:       any//(data?: userData) => Promise<void>
  retrieveCredentials?:   () => Promise<any | null>
  deleteCredentials:     () => Promise<any | null>
}

const defaultUserValue: userContext = {
  userData:{
    user_token: "",
    user: {
      email: "",
      user_id: "",
      user_name: ""
    },
  },
  setUser_token: (token) => {},
  setUser: (user) => {},
  saveCredentials: async () => {},
  retrieveCredentials: async () => {},
  deleteCredentials: async () => {},
};

export const UserContext = React.createContext(defaultUserValue);

export const UserProvider = ({ children }: any) => {
  const [user_token, setUser_token] = useState(defaultUserValue.userData.user_token);
  const [user, setUser] = useState(defaultUserValue.userData.user);

  const saveC = async (data: userData)=>{
    const jsonValue = JSON.stringify(data)
    await AsyncStorage.setItem('user_data', jsonValue).then(()=>{
      setUser(data.user)
      setUser_token(data.user_token)
    }).catch((err)=>{
      
    })
  }
  

  const saveCredentials = async (data?: userData)=>{
    data && saveC(data)
  }

  const deleteCredentials = async () => {
    await AsyncStorage.removeItem("user_data");
  };

  return (
    <UserContext.Provider
      value={{
        userData: {user_token, user},
        saveCredentials,
        deleteCredentials
      }}
    >
      {children}
    </UserContext.Provider>
  );
}