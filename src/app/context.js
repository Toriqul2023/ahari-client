'use client'
import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";
import axios from "axios";

export const MyContext = createContext('');
 

const AuthProvider=({children})=>{
    const[datas,setDatas]=useState() //shop access
    const [cartData, setCartData] = useState([]);
    const [loading,setLoading]=useState(true)
    const [currentPage, setCurrentPage] = useState(0);
    const [pageNumber,setPageNumber]=useState()
    const auth = getAuth(app);
    const [user,setUser]=useState()
   

    useEffect(()=>{
        fetch('http://localhost:4000/shop')
        .then(res=>res.json())
        .then(data=>setDatas(data.result))
  },[])
   const  addCart=async (product,email)=>{ //cart button
  
     try{
       await axios.post('http://localhost:4000/cart',{
          productUid:product._id,
          email:email,
          image:product.image,
          name:product.name,
          price:product.price,
          quantity:1,

        })
       
       
     }
     catch(err){
         console.log(err)
     }
 }

   const loginUser=(email,password)=>{
       return signInWithEmailAndPassword(auth,email,password);
   }
    const createUser=(email,password)=>{
         return createUserWithEmailAndPassword(auth, email, password)
    }
                useEffect(()=>{
                    const unsubscribed= onAuthStateChanged(auth, (user) => {
                        if (user) {
                            
                        setUser(user)
                        setLoading(false)
                        // ...
                        } else {
                            setLoading(true)
                         setUser({})
                        }
                    });
                    return ()=> unsubscribed
                },[])
   
const updateName=(name)=>{
    updateProfile(auth.currentUser,{
        displayName:name,
    }).then(()=>{
      window.location.reload()
    })
}
    const authInfo={
        datas,setDatas,
        user,
        setUser,
        addCart,
        createUser,
        pageNumber,setPageNumber,
        updateName,loading,setLoading, cartData,
        setCartData,
        loginUser,loading,setLoading
    }
    
    return(
        <MyContext.Provider value={authInfo}>
                {children}
        </MyContext.Provider>)
    }
    
   export default AuthProvider;


