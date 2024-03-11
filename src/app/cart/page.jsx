'use client'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../context'
import PrivateRoute from '../PrivateRoute'

const page = () => {
   const [carts,setCarts]=useState([])
   const [total,setTotal]=useState()
   const [page,setPage]=useState(0)

   const [pageNumbers,setPageNumbers]=useState(0)
  const {user,addCart}=useContext(MyContext)
   
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:4000/cart?page=${page}&&email=${user?.email}`);
          const data = await response.json();
    
          setCarts(data.result);
          // setTotal(data.sum)
          setPageNumbers(parseInt(Math.floor(15 / 3)));
          setTotal(data?.sums)
          console.log(data.sum)
          
        } catch (error) {
          console.error('Error fetching cart data:', error);
        }
      };
    
      fetchData();
    }, [page, user,carts],[]);
 
    console.log(carts?.length)
    console.log('this ',pageNumbers)
    console.log(total)
    
 
  return (
    <PrivateRoute>
    <div className='w-[100%] flex p-5'>
        <div className='w-[70%] justify-self-end'>
        <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Quantity</th>
                      
                      <th>Price</th>
                      
                      <th></th>
                    </tr>
                  </thead>
                  
                  
                    
                    {
                      carts?.map(cart=>(
                          <tbody>
                          <tr>
                          <th>
                            <label>
                              <input type="checkbox" className="checkbox" />
                            </label>
                          </th>
                          <td>
                            <div className="flex items-center gap-3">
                              <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                  <Image src={cart?.image} alt="Avatar Tailwind CSS Component" width={500} height={500} />
                                </div>
                              </div>
                              <div>
                                <div className="font-bold">{cart?.name}</div>
                                
                              </div>
                            </div>
                          </td>
                          <td>
                            {cart?.email}
                          
                          </td>
                          <td>{cart?.quantity}</td>
                          <td>{cart?.price}</td>
                        
                        </tr>
                        </tbody>
                      ))
                    }
                    
                
                  
                  


                  
                </table>
                <div className="join mt-5">
                  {
                    [...Array(pageNumbers)?.keys()].map(pageNumber=>(
                      <button onClick={()=>setPage(pageNumber)} className="join-item btn">{pageNumber+1}</button>
                    ))
                  }


</div>
</div>
        </div>
        <div className='w-[30%] h-[200px] shadow'>
           <div className="card shadow p-5">
            <h3>Sub Total:{parseFloat(total)}</h3>
           </div>
        </div>
        
    </div>
    </PrivateRoute>
  )
}

export default page