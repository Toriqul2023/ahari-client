'use client'
import { faHome, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { MyContext } from '../context'


const Header = () => {
  const [active,setActive]=useState(false)
  const {user,loading}=useContext(MyContext)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
     
        
        
         const changeBackground=()=>{
          if(window.scrollY>50){
            setActive(true)
          }
          else{
                setActive(false)
          }
         }
         useEffect(()=>{
          window.addEventListener('scroll',changeBackground)
         },[])
        
    
      
  return (
   

    <div className={!active ? `sticky w-[100%] bg-white top-0 left-0 z-[999]  `:'sticky w-[100%] bg-black top-0 left-0 z-[999] text-white'}>
    
     <div className='w-[60%] mx-[auto] flex items-center'>
           <div className='mr-2'>
          
            <Image style={{width:'95px',height:'105px',}} className={active ? 'bg-blend-darken': 'bg-blend-multiply'} src={'https://aharibd.com/wp-content/uploads/2023/12/ahari.jpg'} width={500} height={500}/>
           </div>
           <div>
                    <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn text-white bg-[#04472D] m-1 w-52 hover:bg-[#04472D]" style={{outline:'none'}}>Browse Categories</div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li className='text-black'><a>Item 1</a></li>
                <li className='text-black'><a>Item 2</a></li>
            </ul>
            </div>
           </div>
           <div>
           <form onSubmit={handleSubmit(onSubmit)} className='w-[600px] ml-2'>
      {/* register your input into the hook by invoking the "register" function */}
      <input placeholder="Search Product" {...register("example")} className='w-[90%] p-3 border border-[#04472D]' style={{borderTopLeftRadius:'5px',outline:'none',borderBottomLeftRadius:'5px',borderRightColor:'white'}} />

      {/* include validation with required or other standard HTML validation rules */}
     
      

      <button className=' bg-[#04472D] p-3 w-[10%] text-white ' type="submit" style={{borderTopRightRadius:'5px',borderBottomRightRadius:'5px',outline:'none'}} >
      <FontAwesomeIcon
    icon={faSearch}
    style={{ fontSize: 20,  }}
/>
      </button>
    </form>
           </div>
           <div className='ml-5 flex grow  justify-between items-center '>
            <div className=''>
            
           
            </div>
            <div className='justufy-end'>
            <FontAwesomeIcon className=' mr-3' icon={faHome} style={{fontSize:20}} />
            <FontAwesomeIcon icon={faUser} style={{fontSize:20}}  className='mr-2' />      Login / Registar
            
            </div>
         

           </div>
        </div>
     </div>
        
    
  )
}

export default Header