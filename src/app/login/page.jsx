'use client'
import React, { useContext } from 'react'
import { MyContext } from '../context'
import { useForm } from "react-hook-form"
import Link from 'next/link'

const page = () => {
    const {user,setUser,loginUser,updateName,setLoading}=useContext(MyContext)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    //   const onSubmit = (data) => {
    //     createUser(data.email,data.password)
    //     .then(result=>{
    //         updateProfile(data.name)
            
    //         setUser(result.email)})
    //     .catch(err=>console.log(err))
    //     console.log(user?.email)
    //   }
    async function onSubmit(data) {
        try {
            const result = await loginUser(data.email, data.password);
            
            setUser(result.email);
            setLoading(false)
            
            console.log(user
                );
        } catch (err) {
            console.log(err);
        }
    }
     
    
  return (
    <div>
       <div className='w-[60%] mx-auto'>
       <div className="hero  bg-base-200">
  <div className="hero-content bg-[#044029] text-white  lg:flex">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
      
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" id='email' {...register("email")}  className="input input-bordered text-black" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password")} placeholder="password" id='password' className="input input-bordered text-black" required />
          <label className="label">
            <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
            <Link href={'/registar'} className="label-text-alt link link-hover">Registar</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary bg-[#044029] text-white hover:bg-[#044029]">Log In</button>
        </div>
      </form>
    </div>
  </div>
</div>
       </div>

    </div>
  )
}

export default page;