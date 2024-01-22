import React from 'react'
import styled from 'styled-components'

export default function ChatContainer({currentChat}) {
  return (
    <>
    {
        currentChat && (
    <Container>
        <div className="chat-header">
            <div className="user-details">
                <div className="avatar">
                <img
                      src={`data:image/svg+xml;base64,${currentChat.avatarImage}`}
                      alt=""
                    />
                </div>
                <div className="username">
                    <h3>
                        {currentChat.username}
              

                    </h3>
                </div>
            </div>
        </div>
        <div className="chat-messages">

        </div>
        <div className="chat-input">

        </div>
    </Container>
        )}
    </>
  )
}

const Container = styled.div``
