import React, { useEffect, useState } from 'react'
import Logo from "../../../../public/images/logo.png"
import { ClipLoader } from "react-spinners"
import { adminLogin,messageClear } from '../../../store/Reducers/authReducer.js'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from "react-router-dom"
import toast from "react-hot-toast"

const Login = () => {
  const naviagate = useNavigate()

  const dispatch = useDispatch()
  const { loader,errorMessage,successMessage } = useSelector(state => state.auth)

  const [state, setState] = useState({
    email: "",
    password: ""
  })

  const inputHandel = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const formSubmit = (e) => {
    e.preventDefault();
    dispatch(adminLogin(state))
  }

  useEffect(()=>{
    if(errorMessage){
      toast.error(errorMessage)
      dispatch(messageClear())
    }

    if (successMessage) {
      toast.success(successMessage)
      dispatch(messageClear())
      naviagate('/')
    }
  },[errorMessage,successMessage])

  const loaderStyle = {
    display:'flex',
    margin:"0 auto",
    heigth:"50 px",
    justifyContent:"center",
    alignItems:"center"
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


            <button disabled={loader ? true : false}
              type="submit"
              className="bg-indigo-600 w-full hover:shadow-indigo-600/30 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3">
                {
                  loader ? <ClipLoader color="#fff" cssOverride={loaderStyle}/> : "Login"
                }
              </button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
