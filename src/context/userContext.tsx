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
      /*getCurrentUser(data.user_token!).then((response) => {
        setUser(response.data.response[0])
      })
      .catch((error) => {
        console.log(error);
      })*/
      setUser_token(data.user_token)
    }).catch((err)=>{
      console.log(err)
    })
  }
  

  const saveCredentials = async (data?: userData)=>{
    //console.log(data);
    
    !data
      ?
        console.log("fallo al guardar cred")
      :
        saveC(data)
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
};


/*
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { FC, useContext, useState } from "react";

export interface IUserContext {
  token?: string | null;
  user?: IUser | null;
  setToken: (token: string) => void;
  setUser: (user: IUser) => void;
  saveCredentials: (token?: string | null, user?: IUser | null) => Promise<void>;
  retrieveCredentials: () => Promise<any | null>;
  deleteCredentials: () => Promise<any | null>;
}

const defaultUserValue: IUserContext = {
  token: null,
  user: null,
  setToken: (token) => {},
  setUser: (user) => {},
  saveCredentials: async () => {},
  retrieveCredentials: async () => {},
  deleteCredentials: async () => {},
};

export const UserContext = React.createContext(defaultUserValue);

export const UserProvider = ({ children }: any) => {
  const [token, setToken] = useState(defaultUserValue.token);
  const [user, setUser] = useState(defaultUserValue.user);

  const saveCredentials = async (token?: string | null, user?: IUser | null) => {
    console.log({ token, user });
    if (!token || !user) {
      console.error("You must set the user and the token first");
      return;
    }
    Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await AsyncStorage.setItem(
      "user",
      JSON.stringify({
        token,
        user,
      })
    );
  };

  const retrieveCredentials = async () => {
    var storedCredentials = await AsyncStorage.getItem("user");
    if (storedCredentials) {
      const credentials = JSON.parse(storedCredentials);
      Api.defaults.headers.common["Authorization"] = `Bearer ${credentials.token}`;
      setToken(credentials.token);
      setUser(credentials.user);
      return credentials;
    }
    return null;
  };

  const deleteCredentials = async () => {
    setToken(null);
    setUser(null);
    delete Api.defaults.headers.common["Authorization"];
    await AsyncStorage.removeItem("user");
  };

  return (
    <UserContext.Provider
      value={{
        token,
        user,
        setToken,
        setUser,
        saveCredentials,
        retrieveCredentials,
        deleteCredentials,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
*/