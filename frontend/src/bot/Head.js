import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'

export default function Head(props) {
console.log(props);
    return (
        <div className='x' style={{ padding: "5px", borderRadius: "3px" }}>
            <div className="headtext">Conversation with Bott</div>
            <span className="icon"><AiOutlineClose /></span>
        </div>
    )
}