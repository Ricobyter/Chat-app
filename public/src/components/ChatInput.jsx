// import React, { useState } from "react";
// import { BsEmojiSmileFill } from "react-icons/bs";
// import { IoMdSend } from "react-icons/io";
// import styled from "styled-components";
// import Picker from "emoji-picker-react";

// export default function ChatInput({ handleSendMsg }) {
//   const [msg, setMsg] = useState("");
//   const [chosenEmoji, setChosenEmoji] = useState(null);
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);

//   const handleEmojiPickerhideShow = () => {
//     setShowEmojiPicker(!showEmojiPicker);
//   };

//   const handleEmojiClick = (event, emojiObject) => {
//     // setChosenEmoji(emojiObject.target);
//     // // console.log(emojiObject.target);
   
//     let message = msg;
//     message += emojiObject.target;
//     setMsg(message);
//     console.log(message);
//   };

//   const sendChat = (event) => {
//     event.preventDefault();
//     if (msg.length > 0) {
//       handleSendMsg(msg);
//       setMsg("");
//     }
//   };

//   return (
//     <Container>
//       <div className="button-container">
//         <div className="emoji">
//           <BsEmojiSmileFill onClick={handleEmojiPickerhideShow} />
//           {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick}  />}
//         </div>
//       </div>
//       {/* className="absolute top-[-550px] bg-slate-500 z-0" */}
//       <form className="input-container" onSubmit={(event) => sendChat(event)}>
//         <input
//           type="text"
//           placeholder="type your message here"
//           onChange={(e) => setMsg(e.target.value)}
//           value={msg}
//           className="z-10"
//         />
//         <button type="submit">
//           <IoMdSend />
//         </button>
//       </form>
//     </Container>
//   );
// }

// const Container = styled.div`
//   display: grid;
//   align-items: center;
//   grid-template-columns: 5% 95%;
//   background-color: #080420;
//   padding: 0 2rem;
//   @media screen and (min-width: 720px) and (max-width: 1080px) {
//     padding: 0 1rem;
//     gap: 1rem;
//   }
//   .button-container {
//     display: flex;
//     align-items: center;
//     color: white;
//     gap: 1rem;
//     .emoji {
//       position: relative;
//       svg {
//         font-size: 1.5rem;
//         color: #ffff00c8;
//         cursor: pointer;
//       }
      
//        .emoji-picker-react{
//          position: absolute;
//         top: -350px;
//       background-color: #080420;
//       box-shadow: 0 5px 10px #9a86f3;
//       border-color: #9a86f3;
//       .emoji-scroll-wrapper::-webkit-scrollbar {
//       background-color: #080420;
//       width: 5px;
//            &-thumb {
//             background-color: #9a86f3;
//           }
//       }


//         .emoji-categories {
//           button {
//             filter: contrast(0);
//           }
//         }
//         .emoji-search {
//           background-color: transparent;
//           border-color: #9a86f3;
//         }
//         .emoji-group:before {
//           background-color: #080420;
//         }
//       }
//     }
//   }
//   .input-container {
//     width: 100%;
//     border-radius: 2rem;
//     display: flex;
//     align-items: center;
//     gap: 2rem;
//     background-color: #ffffff34;
//     input {
//       width: 90%;
//       height: 60%;
//       background-color: transparent;
//       color: white;
//       border: none;
//       padding-left: 1rem;
//       font-size: 1.2rem;

//       &::selection {
//         background-color: #9a86f3;
//       }
//       &:focus {
//         outline: none;
//       }
//     }
//     button {
//       padding: 0.3rem 2rem;
//       border-radius: 2rem;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       background-color: #9a86f3;
//       border: none;
//       @media screen and (min-width: 720px) and (max-width: 1080px) {
//         padding: 0.3rem 1rem;
//         svg {
//           font-size: 1rem;
//         }
//       }
//       svg {
//         font-size: 2rem;
//         color: white;
//       }
//     }
//   }
// `;



import React, { useState } from 'react'
import { IoMdSend } from "react-icons/io";
import { FaFaceSmile } from "react-icons/fa6";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

export default function ChatInput({handleSendMsg}) {

const[showEmoji, setShowEmoji] = useState(false);
const[text, setText] = useState("");

// Adding emojis
const addEmoji = (e) =>{
const sym = e.unified.split("_");
const codeArray = [];
sym.forEach((el) => codeArray.push("0x" + el));
let emoji = String.fromCodePoint(...codeArray);
setText(text + emoji);
console.log(sym);
}

const sendChat = (event) => {
  event.preventDefault();
  if(text.length >0) {
    handleSendMsg(text); 
    setText('');
  }
}
  return (
    <div className='grid items-center bg-[#080420] grid-cols-10 w-[100%] flex-row'>
      <div className='col-span-1 color-white relative mx-auto'>
      {showEmoji && <div className='absolute top-[-450px] border-purple-600 bg-[#ffffff34] border rounded-lg'>
   <Picker data={data} 
   onEmojiSelect={addEmoji}
  emojiSize = {20}
  maxFrequentRows = {0}
  emojiButtonSize = {28}
  />
   </div>}
   <FaFaceSmile className='cursor-pointer text-yellow-500' onClick={() =>setShowEmoji(!showEmoji)}/>
   
   <div>
   
   </div>
      </div>
      <div className='col-span-9'>
     <form action="" className='flex items-center' onSubmit={(e) => sendChat(e)}>
      <input type="text" value={text} placeholder='Your message...' onChange={(e) => setText(e.target.value)} className='w-[90%] bg-[#ffffff34] py-1 px-2 rounded-md outline-none text-white mr-3'/>
      <button className='bg-none text-white h-[5rem]' type='submit'><IoMdSend/></button>
     </form>  
      </div>
    </div>
  )
}
