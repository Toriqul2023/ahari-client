import React, { useContext } from 'react'
import { MyContext } from './context'
import { useRouter } from 'next/navigation';


const PrivateRoute = ({children}) => {
    const router = useRouter();
    const{loading,user}=useContext(MyContext)
    if(loading){
          <h3>Loading</h3>
    }
    else if(!user?.email){
        router.push({
            pathname:'/login'
        }); 
    }
  return (
    <div>{children}</div>
  )
}

export default PrivateRoute