import React, { useState } from 'react'
import Logo from "../../../../public/images/logo.png"


import { adminLogin } from '../../../store/Reducers/authReducer.js'
import { useDispatch } from 'react-redux'


const Login = () => {
  const dispatch = useDispatch()

  const [state,setState]=useState({
    email:"",
    password:""
  })

  const inputHandel = (e)=>{
    setState({
      ...state,
      [e.target.name]:e.target.value
    })
  }

  const formSubmit = (e)=>{
    e.preventDefault();
    dispatch(adminLogin(state))
  }

  return (
    <div className="min-w-screen min-h-screen bg-[#161d31] flex justify-center items-center" >
      <div className="w-[360px] text-[#d0d2d6] p-2">
          <div className="bg-[#283046] p-3 rounded-md">
            <div className="h-[70px] flex justify-center items-center">
              <div className="w-[180px] h-[50px]">
                <img className="w-full h-full" src={Logo} alt="Website Logo" />
              </div>
            </div>
          
            <form onSubmit={formSubmit}>
              <div className="flex flex-col w-full gap-1 mb-3">
                <label htmlFor="email" className="">Email</label>
                <input type="email" 
                       name="email"
                       onChange={inputHandel}
                       value={state.email}
                       className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-600 overflow-hidden"
                       placeholder='Enter your email'
                       id="email" 
                       required
                       />
              </div>

              <div className="flex flex-col w-full gap-1 mb-3">
                <label htmlFor="password" className="">Password</label>
                <input type="password" 
                       name="password"
                       onChange={inputHandel}
                       value={state.password}
                       className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-600 overflow-hidden"
                       placeholder='Enter your password'
                       id="password" 
                       required
                       />
              </div>

              
              <button type="submit" className="bg-indigo-600 w-full hover:shadow-indigo-600/30 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3">Login</button>
                
            </form>
          </div>
      </div>
    </div>
  )
}

export default Login
