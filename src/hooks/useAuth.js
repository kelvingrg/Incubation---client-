import React,{useContext}  from 'react'
import { AuthContext } from '../Context/Context'


function useAuth() {
  return useContext(AuthContext);
}

export default useAuth