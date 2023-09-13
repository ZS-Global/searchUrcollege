import React from 'react'

function StartBtn(props) {
      
    const initialAction = () => {
        props.actions.initialAction();
    }
  return (
    <div>
        <button className='start-btn' onClick={() => initialAction()}>
            lets get started
        </button>
    </div>
  )
}

export default StartBtn