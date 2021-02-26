import { React, useEffect, useState } from "react";
import { Card, Row, Col } from "antd";
import Chat from "../../components/Chat/Chat";
import Users from "../../components/Users/Users";
import io from "socket.io-client";
import "./ChatRoom.css";

import queryString from "query-string";

const ENDPOINT = "http://localhost:5000/";

let socket;

const ChatRoom = (props) => {
  // Socket.io options to prevent cors errors
  const connectionOptions = {
    "force new connection": true,
    reconnectionAttempts: "Infinity",
    timeout: 10000,
    transports: ["websocket"],
  };
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  // Connect to socket and set the room and username
  useEffect(() => {
    const { name, room } = queryString.parse(props.location.search);

    setRoom(room);
    setName(name);

    socket = io.connect(ENDPOINT, connectionOptions);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, props.location.search]);

  // Get information about the room and users in it. Handle incoming message by putting it in messages Array.
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = () => {
    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
      console.log(message);
    }
  }

  return (
    <div>
      <Row justify="center" align="middle" className="roomContainer">
        <Col span="12">
          <Chat messages={messages} name={name} users={users} sendMessage={sendMessage} setMessage={setMessage} room={room} />
        </Col>
        <Col span="12">
          <Users users={users} />
        </Col>
      </Row>
    </div>
  );
};

export default ChatRoom;
