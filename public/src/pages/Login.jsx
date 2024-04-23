import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/logo2.png'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"
import { loginRoute } from '../utils/APIRoutes'


function Login() {

  const navigate = useNavigate()

  const [values, setValues] = useState({
    username: "",
    password: "",
  })

  const toastOptions = {
    position: 'bottom-right',
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark'
  }

  useEffect(() => {
    if (localStorage.getItem('chat-app-user')) {
      navigate('/')
    }
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();
    // alert("form");
    if (handleValidation()) {
      const { password, username } = values;
      const { data } = await axios.post(loginRoute, {
        username,
        password
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions)
      }
      if (data.status === true) {
        localStorage.setItem('chat-app-user', JSON.stringify(data.user))
      }
      navigate("/")
    }
  }

  const handleValidation = () => {
    const { password, username } = values;
    if (password === "") {
      toast.error("Username and password is required", toastOptions);
      return false;
    } else if (username.length === "") {
      toast.error("Username and password is required", toastOptions);
      return false;
    }
    return true;
  }
    ;

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })

  }

  return (
    <>
      <FormContainer>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h1 className='font-bold'>TalkHub</h1>
          </div>
          <input
            type="text"
            placeholder='Username'
            name='username'
            onChange={e => handleChange(e)}
            min="3" />
          <input
            type="password"
            placeholder='Password'
            name='password'
            onChange={e => handleChange(e)} />

          <button type='submit'>Login</button>\
          <span>Don't have an account ? <Link to='/register'>Register Now</Link></span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  )
}

const FormContainer = styled.div`
height: 100vh;
display: flex;
width: 100vw;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 1rem;
background-color: #131324;

img{
  height: 3.5rem
}

.brand{
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
}

h1{
  color: white;
  text-transform: uppercase
}

form{
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: #00000076;
  border-radius: 2rem;
  padding: 3rem 4rem;
  input{
    padding: 1rem;
    background-color: transparent;
    border: 0.1rem solid #bb3bf4;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus{
      outline: none;
      border: 0.1rem solid #4e0eff;
    }
    
  }
 
  span{
    color: white;
    text-transform: uppercase;
    margin-top: -2rem;
    a{
      color: #bb3bf4;
      font-weight: bold;
      text-transform: none
      text-decoration: none;
    }
  }

  button{
    background-color: rgb(134,31,200);
    padding: 1rem 2rem;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 0.4rem;
    font-weight: bold;
    font-size: 1rem;
    text-transform: uppercase;
    transition: 0.4s ease-in-out;
    &:hover{
      background-color: #4e0eff;
    }
  }
}

`;

export default Login
