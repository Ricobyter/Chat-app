import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo.svg'

export default function Contacts({ contacts, currentUser }) {

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

  }

  return (
    <>
      {
        currentUserImage && currentUserName && (
          <Container>
            <div className="brand">
              <img src={Logo} alt="logo" />
              <h3>
                Talkie
              </h3>
            </div>
            <div className='contacts'>
              {
                contacts.map((contact, index) => {
                  return (
                    <div className={`contact ${index === currentSelected ? "selected" : ""}`} key={index}>
                      <div className="avatar">
                        <img src={`data:image/svg+xml;base64,${contact.avatarImage}`} alt="avatar" />
                      </div>
                      <div className="username">
                        <h3>{contact.username}</h3>
                      </div>

                    </div>
                  )
                })
              }
            </div>
            <div className="current-user">
              <div className="avatar">
                <img src={`data:image/svg+xml;base64,${contact.avatarImage}`} alt="avatar" />
              </div>
              <div className="username">
                <h3>{contact.username}</h3>
              </div>
            </div>
          </Container>
        )
      }
    </>
  )
}

const Container = styled.div;
