import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


 export const AuthContext= createContext(null)

const AuthProvider = ({children}) => {
      const[user,setUser]= useState(null);
      const[loading, setLoading]= useState(true)

      const createUser= (email,password)=>{
            setLoading(true)
            return createUserWithEmailAndPassword(auth, email, password);

      } 

      const singIn= (email, password)=>{
            setLoading(true)
            return signInWithEmailAndPassword(auth,email,password)


      }

      const logOut =()=>{

           return signOut(auth)
      }

      useEffect(()=>{
           const unSubscribe = onAuthStateChanged(auth, currentUser=>{
                  setUser(currentUser);
                  setLoading(false);
                  console.log(currentUser)

            })
            return ()=>{
                  return unSubscribe
            }
      },[])




      const authInfo= {
            user,
            loading,
            createUser,
            singIn,
            logOut

      }
      return (
            <AuthContext.Provider value={authInfo}>
                 { children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;