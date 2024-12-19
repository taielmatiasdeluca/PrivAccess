import { useState, useEffect } from "react";
import axios from "axios";
import { useMainContext } from "../context/MainContext";
import { use } from "react";


const useApi = () => {
  
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [token, setToken] = useState(localStorage.getItem("jwt") || null);


  useEffect(() => {
    if (token) {
      if (isTokenExpired()) {
        logout();
      }
     
    }
  },[token]);


  function isTokenExpired() {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const exp = payload.exp;

    const now = Math.floor(Date.now() / 1000); 
    console.log(exp)
    console.log(now)

    return now > exp; 
  }

  // Base api url
  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });





  const setAuthHeader = ({token,user}) => {
    setToken(token);
    setUser(user);
    localStorage.setItem("jwt", token);
    localStorage.setItem("user", JSON.stringify(user));
  }

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("jwt");
    localStorage.removeItem("user"); 


  };

  // Función para verificar si el usuario está autenticado
  const isAuthenticated = () => !!token;



  return { user, token, setAuthHeader, logout, isAuthenticated, api };
};

export default useApi;
