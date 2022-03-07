import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
const UserContext = React.createContext();
const backendLink = `${process.env.REACT_APP_SERVER_URL}/api`;

export function useUser() {
  return useContext(UserContext);
}



export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCurrentUser(currentUser);
    setLoading(false);
  }, [currentUser]);


  useEffect(() => {
    axios.post(`${backendLink}/users/validate`, {}, { withCredentials: true }).then(res => {
      setCurrentUser(res.data[0]);
    }).catch(error => {
    })
  }, []);

  async function logout(){
    try{
      await axios.delete(`${backendLink}/users/logout`,  { withCredentials: true });
      window.location.href = '/';
    }
    catch(error) {
      console.log(error);
    }
  }

  function loginUser(email, password) {
    if(!email || !password){
      return;
    }
    let formData = new URLSearchParams();
    formData.append('email', email);
    formData.append('password', password);
    return new Promise((resolve, reject) => {
      axios.post(`${backendLink}/users/login`, formData, { withCredentials: true }).then(result => {
        if (result.status === 200) {
          setCurrentUser(result.data);
          resolve();
        }
      }).catch(error => {
        reject(error)
      })
    });

    /* try{
      const result = await axios.post(`${backendLink}/users/login`, formData, { withCredentials: true });
      if (result.status === 200) {
        setCurrentUser(result.data);
        window.location.href = '/';
      }
    }
    catch(error) {
      alert("Falscher Username oder Passwort")
    } */
  }

  async function registerUser(email, password) {
    if(!email || !password){
      return;
    }
    let formData = new URLSearchParams();
    formData.append('email', email);
    formData.append('password', password);
    try{
      const result = await axios.post(`${backendLink}/users`, formData, { withCredentials: true });
      if (result.status === 201) {
        window.location.href = '/login';
      }
    }
    catch(error) {
      throw new Error(error);
    }
  }

  async function updateUserData(newData) {
    if(!newData){
      return;
    }
    let formData = new FormData();
    for(let elem in newData){
      formData.append(elem, newData[elem]);
    }
    try{
      const result = await axios.put(`${backendLink}/users/${currentUser.id}`, formData, {withCredentials: true, headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
      if (result.status === 200) {
        window.location.reload();
      }
    }
    catch(error) {
      throw new Error(error);
    }
  }


  const value = {
    currentUser,
    setCurrentUser,
    logout,
    loginUser,
    registerUser,
    updateUserData
  };

  return (
    <UserContext.Provider value={value}>
      {!loading && children}
    </UserContext.Provider>
  );
}