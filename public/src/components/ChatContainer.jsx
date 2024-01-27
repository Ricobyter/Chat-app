import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Logout from './Logout'
import ChatInput from './ChatInput'
// import Messages from './Messages'
import axios from 'axios';
import { getAllMessagesRoute, sendMessageRoute } from '../utils/APIRoutes'


export default function ChatContainer({ currentChat, currentUser }) {

    const [messages, setMessages] = useState([])

    useEffect( async () => {
        // async function messagesent(){
            const response = await axios.post(getAllMessagesRoute, {
                from: currentUser._id,
                to: currentChat._id,
                            });
                            setMessages(response.data)
        //} //messagesent()

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
                                                <div className="content text-white max-w-80 p-1 border-none rounded-lg text-[1.1rem] break-words ">
                                                    <p className='px-2 py-1'>
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
display: grid;
grid-template-rows: 10% 78% 12%;
gap: 0.1rem;
overflow: hidden;
@media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: 15% 70% 15%;
  }
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

.chat-messages{
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
    .message: {
        display : flex;
        align-items: center;
    }
    .sended{
        display: flex;
        justify-content: flex-end;
        .content{
            background-color: #4f04ff21;
        }
    }
    .received{
        display: flex;
        justify-content: flex-start;
        .content{
            background-color: #9900ff20;
        }
    }
}


`
