import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Logo from '../assets/logo.svg'

function Register() {

    const handleSubmit = (event) =>{
        event.preventDefault();
        alert("form");
    }
    const handleChange=(event)=>{
      
    }

  return (
    <FormContainer>
      <form onSubmit={(event) => handleSubmit(event)}>
<div className="brand">
    <img src={Logo} alt="logo" />
    <h1>Talkie</h1>
</div>
<input 
type="text" 
placeholder='Username' 
name='username' 
onChange={e=>handleChange(e)}/>
<input 
type="email" 
placeholder='Email' 
name='email' 
onChange={e=>handleChange(e)}/>
<input 
type="password" 
placeholder='Password' 
name='password' 
onChange={e=>handleChange(e)}/>
<input 
type="password" 
placeholder='Confirm Password' 
name='confirmPassword' 
onChange={e=>handleChange(e)}/>

<button type='submit'>Create User</button>\
<span>Already have an account ?<Link to= '/login'>Click Here</Link></span>
      </form>
    </FormContainer>
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
  height: 5rem
}

.brand{
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
}

h1{
  color: white;
}

`;

export default Register
