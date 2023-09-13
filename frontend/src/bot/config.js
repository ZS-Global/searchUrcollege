import { createChatBotMessage } from 'react-chatbot-kit';
import StartBtn from './StartBtn'
import StartSlow from './StartSlow'
import data from './data';
import DisplayImage from './DisplayImage';
import Head from './Head';

const config = {
  initialMessages: [createChatBotMessage(`Hi! Welcome to searchUrCollege`,{
    widget:"startBtn"
  })],
  botName: 'Bott',
  customStyles: {
    
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  customComponents: {
    // Replaces the default header
    header: () => (props) => <Head {...props} />,
  },
  state: {
    checker : null,
    data,
    userData:{
      name: "",
      age: 0,
      category: "",
      product: {
          name: "",
          link: "",
          imageUrl: ""
      }
  }
  },
  widgets: [
    {
      widgetName: 'startBtn',
      widgetFunc: (props) => <StartBtn {...props} />,
      
    },
    {
      widgetName: 'startSlow',
      widgetFunc: (props) => <StartSlow {...props} />,
      
    },
    {
      widgetName: "finalImage",
      widgetFunc: (props) => <DisplayImage {...props} />,
    },
  ],
};

export default config;