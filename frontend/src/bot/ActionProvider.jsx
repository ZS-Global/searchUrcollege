import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  const initialAction = () => {
    const message = createChatBotMessage('Just type in your name to begin...');
    updateState(message, "age")
  }
function afterNameMessage(){
  const message = createChatBotMessage("Let me know your age");
  updateState(message, "preference")
}
function afterAgeMessage(){
  const message = createChatBotMessage("do you run fast or slow",{
    widget: "startSlow"
  });
  updateState(message)
}

const finalResult = (name, age, preference, vehicle) => {
  const message = createChatBotMessage(`Got it, ${name}! Based on your age ${age} and preference for a ${preference} ride, I recommend the '${vehicle}.' Enjoy the thrill!`, {
      widget: "finalImage"
  })
  updateState(message)
}



    const updateState = (message, checker) => {
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages,message],
        checker
      }))
    }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            initialAction,
            afterNameMessage,
            afterAgeMessage,
            finalResult
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;