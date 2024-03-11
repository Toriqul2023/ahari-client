'use client'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../context'
import axios from 'axios'

const page = () => {
  const[shops,setShops]=useState([])
  const [page,setPage]=useState(0)
  const [pageNumber,setPageNumber]=useState(0)
  const {user,addCart}=useContext(MyContext)
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/shop?page=${page}`);
        const data = await response.json();
        console.log(data)
        setShops(data?.result);
        setPageNumber(Math.ceil(data?.allresult?.length/ 20));
        console.log(data?.allresult?.length)
 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  },[page,])
  
  

  return (
    <div>
        <div className='w-[60%] mx-[auto] grid grid-cols-4 gap-5 mt-3'>
              {
                 shops?.map(shop=>(
                     <div className="card shadow-2xl ">
                        <Image className='' src={shop.image} height={500} width={500}/>
                        <h3 className='text-xl px-3 mb-[30px]'>{shop.name}</h3>
                        <p className='px-3 mb-2'>{shop.price}৳</p>
                        {shop._id}
                        <button onClick={()=>addCart(shop,user.email)} className='bg-[#04472D] w-[100%] py-3 text-white'>Add To Cart</button>
                        
                     </div>
                 ))
              } 
           
        </div>
        <div className='p-5'>
        {
                [...Array(pageNumber)?.keys()].map(number=>(
                  <button className='btn mr-2 my-3' onClick={()=>setPage(number)}>{number+1}</button>
                ))
              }
        </div>
       
    </div>
  )
}

export default page