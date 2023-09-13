import React from "react";
import {useState } from "react";
import config from './config.js';
import MessageParser from './MessageParser.jsx';
import ActionProvider from './ActionProvider.jsx';
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css'
import './bot.css'
import bot from'./chatbot.png'
import {AiOutlineClose} from 'react-icons/ai'

const MyComponent = () => {
  const [bott, setbott] = useState(false)
  return (
    
    <div className="bot">
      {bott ? 
      < >
       <Chatbot className="main-bot"
       config={config}
       messageParser={MessageParser}
       actionProvider={ActionProvider}
       setbott={setbott}
       />
       <button id="but" onClick={()=>setbott(!bott)}><AiOutlineClose /></button>
       </>
     :
      <img src={bot} alt="" className="img-bot" onClick={()=>setbott(!bott)}/>
    
    }
    
    </div>
  );
};

export default MyComponent;