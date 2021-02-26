import React from 'react';
import { Card, Form, Input, Button } from 'antd'
import MessageInput from '../MessageInput/MessageInput'
import Messages from '../Messages/Messages'
import InfoBar from '../InfoBar/InfoBar'
import "./Chat.css"

const Chat = (props) => {
  return(
    <div className="chat">
      <InfoBar users={props.users} room={props.room} />
      <Messages messages={props.messages} name={props.name} />
      <MessageInput sendMessage={props.sendMessage} setMessage={props.setMessage} message={props.message} />
    </div>
  )
}

export default Chat