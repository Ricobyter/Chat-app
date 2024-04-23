import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {BiPowerOff} from 'react-icons/bi'

export default function Logout() {
  const navigate = useNavigate();

  const handleClick = async () => {
    localStorage.clear();
    navigate('/login');
  }

  return (
    <Button onClick={handleClick} >
      <BiPowerOff />
    </Button>
  )
}

const Button = styled.button`
display: flex;
align-items: center;
justify-content: center;
padding: 0.5rem;
border-radius: 2rem;
margin-right: 1rem;
background-color: #9a86f3;
border: none;
cursor: pointer;
svg{
  font-size: 1.3rem;
  color: white;
}

`
