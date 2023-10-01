import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineGoogle,AiOutlineGithub} from "react-icons/ai"
import {FiFacebook} from "react-icons/fi"
import {CiTwitter} from "react-icons/ci"
const Login = () => {

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
    console.log(state);
  }

  return (
    <div className="min-w-screen min-h-screen bg-[#161d31] flex justify-center items-center" >
      <div className="w-[360px] text-[#d0d2d6] p-2">
          <div className="bg-[#283046] p-3 rounded-md">
            <h2 className="text-xl mb-3">Welcome to ecomerce</h2>
            <p className="text-sm mb-3">Please sign in to your account and start your business</p>
          
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

              
              <button type="submit" className="bg-indigo-600 w-full hover:shadow-indigo-600/30 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3">Sign In</button>
                <div className="flex justify-center items-center mb-3 gap-3">
                  <p>Note Have An Account then<Link to={'/seller/register'}> Sing Up </Link> </p>
                </div>
                <div className="w-full flex justify-center items-center mb-3">
                  <div className="w-[45%] bg-slate-700 h-[1px]"></div>
                  <div className="w-[10%] flex justify-center items-center">
                    <span className="pb-1">Or</span>
                  </div>
                  <div className="w-[45%] bg-slate-700 h-[1px]"></div>
                </div>
                <div className="flex justify-center items-center gap-3">
                  <div className="w-[35px] h-[35px] flex rounded-md bg-orange-600 shadow-lg hover:shadow-orange-700/50 justify-center items-center cursor-pointer overflow-hidden">
                    <span><AiOutlineGoogle/></span>
                  </div>
                  <div className="w-[35px] h-[35px] flex rounded-md bg-indigo-600 shadow-lg hover:shadow-indigo-700/50 justify-center items-center cursor-pointer overflow-hidden">
                    <span><FiFacebook/></span>
                  </div>
                  <div className="w-[35px] h-[35px] flex rounded-md bg-purple-600 shadow-lg hover:shadow-purple-700/50 justify-center items-center cursor-pointer overflow-hidden">
                    <span><CiTwitter/></span>
                  </div>
                  <div className="w-[35px] h-[35px] flex rounded-md bg-cyan-600 shadow-lg hover:shadow-cyan-700/50 justify-center items-center cursor-pointer overflow-hidden">
                    <span><AiOutlineGithub/></span>
                  </div>
                </div>
            </form>
          </div>
      </div>
    </div>
  )
}

export default Login
