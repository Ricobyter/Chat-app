import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { allUsersRoute } from '../utils/APIRoutes';
import Contacts from '../components/Contacts';

function Chat() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentuser] = useState(undefined)
  useEffect(() => {
    async function findUsers() {
      if (!localStorage.getItem('chat-app-user')) {
        navigate('/login')
      } else {
        setCurrentuser(await JSON.parse(localStorage.getItem("chat-app-user")))
      }
    }
    findUsers()
  }
    , [])

  useEffect(() => {
    async function callAPI() {
      if (currentUser) {
        if (currentUser.isAvatarImageSet) {
          const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
          setContacts(data.data);

        } else {
          navigate("/setAvatar")
        }
      }
    }
    callAPI()
  }
    , [currentUser])
  return (
    <Container>
      <div className="container">
        <Contacts contacts={contacts} currentUser={currentUser} />

      </div>
    </Container>
  )
}

const Container = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
width: 100vw;
justify-content: center;
align-items: center;
gap: 1rem;
background-color: #131324;
.container{
  width: 85vw;
  height: 85vh;
  background-color: #00000076;
  display: grid;
  grid-template-columns: 25% and 75%;
  @media screen and (min-width: 720px) and (max-width: 1080px){
  grid-template-columns: 35% and 65%;
}
  @media screen and (min-width: 360px) and (max-width: 720px){
  grid-template-columns: 45% and 55%;
}


} 

`

export default Chat
