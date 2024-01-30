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
