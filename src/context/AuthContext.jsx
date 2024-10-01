import { createContext, useEffect, useState } from "react";
import {jwtDecode} from "jwt-decode"; 
import { useDispatch } from "react-redux";
import { clearCartItems, fetchCartItems } from "../Redux/actions/cartActions";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userDetail, setUserDetail] = useState({});
  console.log(userDetail)
  
  const [isOpen, setIsOpen]= useState(JSON.parse(localStorage.getItem('isOpen')) || false)
  // console.log(userDetail.length)
  const dispatch= useDispatch()
  
  const login=(token)=>{
    localStorage.setItem('shopcluestoken', JSON.stringify(token));
    const decodeToken= jwtDecode(token)
    setUserDetail(decodeToken)
    dispatch(fetchCartItems())
  }

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('shopcluestoken'));
    if (token) {
      const decodedToken = jwtDecode(token);
      setUserDetail(decodedToken);
    }
  }, []);
 

  const logout=()=>{
    localStorage.removeItem('shopcluestoken')
    setUserDetail('');
    dispatch(clearCartItems())
    // dispatch(fetchCartItems())
  }

  useEffect(()=>{
    localStorage.setItem('isOpen', JSON.stringify(isOpen))
  },[isOpen])

  return (
    <AuthContext.Provider value={{ userDetail, login, logout, isOpen, setIsOpen}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;


// export const UserContextProvider = ({children})=>{
//     const [currentUser,setCurrentUser] = useState(null)
//     const token =  localStorage.getItem('token')
//     // get current user
// const getUser = async()=>{
//     const getUser =  await instance.get('/current-user',{
//         headers:{
//             Authorization:`Bearer ${token}`
//         }
//     })
//     const user = getUser.data;
//     setCurrentUser(user)
// }
// useEffect(()=>{
//     getUser()
// },[token])


//     return 