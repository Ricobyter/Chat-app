import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Logout from './Logout'
import ChatInput from './ChatInput'
// import Messages from './Messages'
import axios from 'axios';
import { getAllMessagesRoute, sendMessageRoute } from '../utils/APIRoutes'


export default function ChatContainer({ currentChat, currentUser }) {

    const [messages, setMessages] = useState([])

    useEffect( () => {
        async function messagesent(){
            const response = await axios.post(getAllMessagesRoute, {
                from: currentUser._id,
                                to: currentChat._id,
                            });
                            setMessages(response.data)
        } messagesent()

    }, [currentChat])

    const handleSendMsg = async (msg) => {
        await axios.post(sendMessageRoute, {
            from: currentUser._id,
            to: currentChat._id,
            message: msg,
        });
    }

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
                            <Logout />
                        </div>
                        <div className="chat-messages">
                            {
                                messages.map((message) => {
                                    return (
                                        <div>
                                            <div className={`message ${message.fromSelf ? "sended" : "received"}`}>
                                                <div className="content">
                                                    <p>
                                                        {message.message}
                                                    </p>
                                                </div>
                                            </div>

                                        </div>

                                    )

                                })
                            }
                        </div>
                        <ChatInput handleSendMsg={handleSendMsg} />
                    </Container>
                )}
        </>
    )
}

const Container = styled.div`
padding-top: 1rem;
.chat-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    paddding: 0.2rem;

    .user-details{
        display: flex;
        align-items: center;
        gap: 1rem;
        .avatar{
            img{
                height: 3rem;
            }
        }
    .username{
        h3{
            color: white;
            font-size: 20px;
        }
    }
    }

}




`
