
import React, {useState,useContext} from 'react'
import axios from '../../Config/baseUrl'
import { useNavigate } from 'react-router-dom';
import {AuthLoginContext} from '../../Context/Context'


function LoginPage() {
  const navigate = useNavigate();
  const{setUser,setUserId}=useContext(AuthLoginContext)
  
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [inavlidCred,setInvalidCred]=useState(false)


 const handleSubmit=async(e)=>{
  e.preventDefault()

let response=await  axios({
    method:'post',
    url:'/login',
    data:{
      email,password
    }
  })
 // let login=response?.data?.login
  let login=response.data.login
let user= response.data?response.data.userData[0]:undefined

  if(login){
    navigate('/');
    setUser(user.name)
    setUserId(user._id)
  } else if(!login){
setInvalidCred(true)
  }

 }

    return (
      <div className="flex h-screen justify-center items-center ">

      <div className=" w-auto  h-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              for="name"
             className="mb-3 block text-base font-medium text-[#07074D]"
            >
            E-mail
            </label>
            <input
              type="email"
              name="name"
              id="name" 
                value={email}
                onChange={(e)=>{
                  setEmail(e.target.value)
                  setInvalidCred(false)
                }}
              placeholder="Email"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          Password
          <div className="mb-5">
            <label
              for="password"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              
            </label>
            <input
              type="password"
              name="name"
              id="name"
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value)
                setInvalidCred(false)
              }}
              placeholder="password"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          {inavlidCred && <label
               for="subject"
               className="mb-3 block text-base font-medium text-red-500">
               
        Invalid credentials please check your entries.
            </label>}

          
          <div className='flex justify-center '>
            <button
              class="rounded-md bg-[#6A64F1] py-3 px-8 text-white "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    )
}

export default LoginPage
