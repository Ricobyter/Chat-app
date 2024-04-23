import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo2.png'

export default function Contacts({ contacts, currentUser, changeChat }) {

  const [currentUserName, setCurrentUserName] = useState(undefined)
  const [currentUserImage, setCurrentUserImage] = useState(undefined)
  const [currentSelected, setCurrentSelected] = useState(undefined)

  useEffect(() => {
    if (currentUser) {
      setCurrentUserImage(currentUser.avatarImage);
      setCurrentUserName(currentUser.username)
    }
  }, [currentUser]);

  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact)
  }

  return (
    <>
      {
        currentUserImage && currentUserName && (
          <Container>
            <div className="brand">
              <img src={Logo} alt="logo" />
              <h3 className='font-semibold'>TalkHub</h3>
            </div>
            <div className="contacts">
              {contacts.map((contact, index) => {
                return (
                  <div
                    className={`contact ${index === currentSelected ? "selected" : ""
                      }`}
                    key={index}
                    onClick={() => changeCurrentChat(index, contact)}
                  >
                    <div className="avatar">
                      <img
                        src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                        alt=""
                      />
                    </div>
                    <div className="username">
                      <h3>{contact.username}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="current-user">
              <div className="avatar">
                <img
                  src={`data:image/svg+xml;base64,${currentUserImage}`}
                  alt="avatar"
                />
              </div>
              <div className="username">
                <h2>{currentUserName}</h2>
              </div>
            </div>
          </Container>
        )
      }
    </>
  )
}

const Container = styled.div`
display: grid;
  grid-template-rows: 10% 75% 15%;
  .brand {
    display: flex;
    align-items: center;
    text-align: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 2rem;
    }
    h3 {
      color: white;
      text-transform: uppercase;
    }
  }
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align:center;
    overflow: auto;
    gap: 0.8rem;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .contact {
      background-color: #ffffff34;
      min-height: 5rem;
      cursor: pointer;
      width: 90%;
      border-radius: 2rem;
      padding: 0.4rem;
      display: flex;
      align-items: center;
      text-align:center;
      transition: 0.5s ease-in-out;
      .avatar {
        img {
          height: 3rem;
        }
      }
      .username {
        gap: 1rem;
        h3 {
          color: white;
          text-align: center;
        align-items: center;
        justify-content: center;
        }
      }
    }
    .selected {
      // box-shadow:  -5px -3.5px 0.5px 5px #9a86f3;
      border-left: 0.5rem solid #9a86f3;
    }
  }

  .current-user {
    background-color: #0d0d30;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 2rem;
    .avatar {
      img {
        height: 4rem;
        max-inline-size: 100%;
      }
    }
    .username {
      h2 {
        color: white;
      }
      
    }
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      gap: 0.5rem;
      .username {
        h2 {
          font-size: 1rem;
        }
      }
    }
    
   
  }

  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .contacts {
      gap: 0.5rem;
      .contact {
        min-height: 3rem;
        .avatar {
          img {
            height: 2rem;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1080px) {
    .contacts {
      gap: 1rem;
      .contact {
        min-height: 6rem;
        .avatar {
          img {
            height: 4rem;
          }
        }
      }
    }
  }

  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .current-user {
      gap: 1rem;
    }
  }

  @media screen and (min-width: 1080px) {
    .current-user {
      gap: 2rem;
    }
  }

  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .current-user {
      gap: 1rem;
      .avatar {
        img {
          height: 3rem;
        }
      }
    }
  }

  @media screen and (min-width: 1080px) {
    .current-user {
      gap: 2rem;
      .avatar {
        img {
          height: 4rem;
        }
      }
    }
  }

  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .brand {
      gap: 0.5rem;
      img {
        height: 1.5rem;
      }
      h3 {
        font-size: 0.5rem;
      }
    }
  }

  @media screen and (min-width: 1080px) {
    .brand {
      gap: 1rem;
      img {
        height: 2rem;
      }
      h3 {
        font-size: 1rem;
      }
    }
  }

  @media screen and (min-width: 375px) and (max-width: 667px) {
    .brand {
      gap: 1rem;
      img {
        height: 1.5rem;
      }
      h3 {
        font-size: 0.5rem;
      }
    }
    .username{
      h2{
        font-size: 0;
        color: transparent;
      }
  }

  @media screen and (min-width: 375px) and (max-width: 667px) {
    .brand {
      gap: 0.5rem;
      img {
        height: 1.5rem;
      }
      h3 {
        font-size: 0.5rem;
      }
    }
  }

  @media screen and (min-width: 667px) {
    .brand {
      gap: 1rem;
      img {
        height: 2rem;
      }
      h3 {
        font-size: 0 rem;
      }
    }
  }

  @media screen and (min-width: 375px) and (max-width: 667px) {
    .contacts {
      gap: 1rem;
      .contact {
        gap: 1rem;
        min-height: 3rem;
        text-align: center;
        font-size: 0.5rem;
        .avatar {
          img {
            height: 2rem;
          }
        }
      }
    }
  }

  @media screen and (min-width: 667px) {1
    .contacts {
      gap: 0.5rem;
      .contact {
        min-height: 4rem;
        font-size: 0.5rem;
        .avatar {
          img {
            height: 3rem;
          }
          width: 100%;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
      }
    }
  }

  @media screen and (min-width: 375px) and (max-width: 667px) {
    .contacts .contact .username h3{
      font-size: 0;
      color: transparent;
    }
    .contact{
      gap: 0.5rem;
      width: 50%;
      border-radius: 100px;
    }
    .current-user {
      gap: 0.5rem;
      .avatar {
        img {
          height: 2rem;
        }
      }
      .username {
        h2 {
          font-size: 0.5rem;
        }
        width: 100%;
        align-items: center;
      }
    }
  }

  @media screen and (min-width: 667px) {
    .contacts .contact .username h3{
      font-size: 0;
      color: transparent;
    }
    .current-user {
      gap: 1rem;
      .avatar {
        img {
          height: 5rem;
        }
      }
      .username {
        h2 {
          font-size: 0.5rem;
        }
      }
    }
  }

  @media screen and (min-width: 360px) and (max-width: 740px) {
    .contacts .contact .username h3{
      font-size: 0;
      color: transparent;
    }
    .brand {
      gap: 0.5rem;
      img {
        height: 1.5rem;
      }
      h3 {
        font-size: 0.5rem;
      }
    }
  }
  
  @media screen and (min-width: 360px) and (max-width: 740px) {
    .contacts .contact .username h3{
      font-size: 0;
      color: transparent;
    }
    .brand {
      gap: 0.5rem;
      img {
        height: 1.5rem;
      }
      h3 {
        font-size: 0.5rem;
      }
    }
  }
  
  @media screen and (min-width: 740px) {
    .contacts .contact .username h3{
      font-size: 0;
      color: transparent;
    }
    .brand {
      gap: 1rem;
      img {
        height: 2rem;
      }
      h3 {
        font-size: 1rem;
      }
    }
  }
  
  @media screen and (min-width: 360px) and (max-width: 740px) {
    .contacts .contact .username h3{
      font-size: 0;
      color: transparent;
    }
    .contacts {
      gap: 0.5rem;
      .contact {
        min-height: 3rem;
        font-size: 0.5rem;
        .avatar {
          img {
            height: 2rem;
          }
        }
      }
    }
  }
  
  @media screen and (min-width: 740px) {
    .contacts .contact .username h3{
      font-size: 0;
      color: transparent;
    }
    .contacts {
      gap: 1rem;
      .contact {
        min-height: 4rem;
        font-size: 0.5rem;
        .avatar {
          img {
            height: 3rem;
          }
          width: 100%;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
      }
    }
  }
  
  @media screen and (min-width: 360px) and (max-width: 740px) {
    
    .current-user {
      gap: 0.5rem;
      .avatar {
        img {
          height: 2rem;
        }
      }
      .username {
        h2 {
          font-size: 0.5rem;
        }
        width: 100%;
        align-items: center;
      }
    }
  }
  
  @media screen and (min-width: 740px) {
    
    .current-user {
      gap: 1rem;
      .avatar {
        img {
          height: 3rem;
        }
      }
      .username {
        h2 {
          font-size: 0.5rem;
        }
      }
    }
  }
  


  @media screen and (min-width: 280px) and (max-width: 653px) {
    .contacts .contact .username h3{
      font-size: 0;
      color: transparent;
    }
    .brand {
      gap: 0.5rem;
      img {
        height: 1.5rem;
      }
      h3 {
        font-size: 0.5rem;
      }
    }
  }
  
  @media screen and (min-width: 280px) and (max-width: 653px) {
    .contacts .contact .username h3{
      font-size: 0;
      color: transparent;
    }
    .brand {
      gap: 0.5rem;
      img {
        height: 1.5rem;
      }
      h3 {
        font-size: 0.5rem;
      }
    }
  }
  
  @media screen and (min-width: 653px) {
    .contacts .contact .username h3{
      font-size: 0;
      color: transparent;
    }
    .brand {
      gap: 1rem;
      img {
        height: 2rem;
      }
      h3 {
        font-size: 1rem;
      }
    }
  }
  
  @media screen and (min-width: 280px) and (max-width: 653px) {
    .contacts .contact .username h3{
      font-size: 0;
      color: transparent;
    }
    .contacts {
      gap: 0.5rem;
      .contact {
        min-height: 3rem;
        font-size: 0.5rem;
        .avatar {
          img {
            height: 2rem;
          }
        }
      }
    }
  }
  
  @media screen and (min-width: 653px) {
    .contacts .contact .username h3{
      font-size: 0;
      color: transparent;
    }
    .contacts {
      gap: 1rem;
      .contact {
        min-height: 4rem;
        font-size: 1rem;
        .avatar {
          img {
            height: 3rem;
          }
          width: 100%;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
      }
    }
  }
  
  @media screen and (min-width: 280px) and (max-width: 653px) {
    .contacts .contact .username h3{
      font-size: 0;
      color: transparent;
    }
    .current-user {
      gap: 0.5rem;
      .avatar {
        img {
          height: 2rem;
        }
      }
      .username {
        h2 {
          font-size: 0.5rem;
        }
        width: 100%;
        align-items: center;
      }
    }
  }
  
  @media screen and (min-width: 653px) {
    .contacts .contact .username h3{
      font-size: 0;
      color: transparent;
    }
    .current-user {
      gap: 1rem;
      .avatar {
        img {
          height: 3rem;
        }
      }
      .username {
        h2 {
          font-size: 1rem;
        }
      }
    }
  }

  @media screen and (min-width: 360px) and (max-width: 740px) {
    .contacts .contact .username h3{
      font-size: 0;
      color: transparent;
    }
    .brand {
      gap: 0.5rem;
      img {
        height: 1.5rem;
      }
      h3 {
        font-size: 0.5rem;
      }
    }
  }

  @media screen and (min-width: 360px) and (max-width: 740px) {
    .contacts .contact .username h3{
      font-size: 0;
      color: transparent;
    }
    .brand {
      gap: 0.5rem;
      img {
        height: 1.5rem;
      }
      h3 {
        font-size: 0.5rem;
      }
    }
  }

  @media screen and (min-width: 645px) {
    .contacts .contact .username h3{
      font-size: 10px;
      color: white;
    }
    .brand {
      gap: 1rem;
      img {
        height: 2rem;
      }
      h3 {
        font-size: 1rem;
      }
    }
  }


  @media screen and (min-width: 500px) {
    .contacts .contact .username h3{
      font-size: 10px;
      color: white;
    }
    .brand {
      gap: 1rem;
      img {
        height: 2rem;
      }
      h3 {
        font-size: 1rem;
      }
    }
  }

`;



