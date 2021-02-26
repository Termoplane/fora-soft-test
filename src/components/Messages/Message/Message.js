import React from 'react';
import { Card } from 'antd';
import "./Message.css"

const Message = ({message, name}) => {
  let isSentByCurrentUser = false;

  if(message.user.toLowerCase() === name.toLowerCase()) {
    isSentByCurrentUser = true;
  }

  return(
    isSentByCurrentUser
      ? (
        <div className="messageContainer justifyEnd">
          <span className="userName" style={{paddingRight: 5}}>{message.user}</span> <span className="bgBlue">{message.text}</span>
        </div>
        )
        : (
          <div className="messageContainer justifyStart">
            <span className="bgGray">{message.text}</span><span className="userName" style={{paddingLeft: 5}}>{message.user}</span>
          </div>
        )
  )
}

export default Message