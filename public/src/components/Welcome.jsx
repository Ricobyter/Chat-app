import React from 'react'
import styled from 'styled-components'
import Robot from '../assets/robot.gif'

export default function Welcome({ currentUser }) {
  return (

    <Container>
      <img src={Robot} alt="Robot gif" />
      <h1>
        Welcome <span>{currentUser.username}!</span>

      </h1>
      <h3>Please select a chat to start messaging

      </h3>
    </Container>

  )
}


const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
background-color: black;
color: white;
h1{
    font-size: 40px;
}
h3{
    font-size: 20px;
}
img{
    height: 20rem;
}
span{
  color: #4e00ff;
}

@media (max-width: 768px) {
  h1{
    font-size: 30px;
  }
  h3{
    font-size: 15px;
  }
  img{
    height: 15rem;
  }
}

`


