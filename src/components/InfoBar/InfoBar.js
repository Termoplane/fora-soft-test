import React from 'react';
import { Badge, notification } from 'antd'
import { CopyOutlined } from '@ant-design/icons';

import "./infoBar.css"

const InfoBar = ({ users, room }) => {
  const copyToClipboard = (e) => {
    let text=`https://termoplane.github.io/fora-soft-test/join?room=${room}`
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()

    notification.open({
      message: 'Ссылка скопирована ✔',
      description:
        'Скиньте ее другу, чтобы он зашел в чат!😎'
    });
  };

  return(
    <div className="infoBar" style={{ width: "80%", height: 40 }}>
      <Badge color="green" style={{ paddingLeft: 10 }} />Онлайн: {users.length}
      <div style={{flexGrow: 1}} />
      <span onClick={copyToClipboard} style={{color: "#7b7b7b", paddingRight: 5, cursor: "pointer"}}>Нажмите чтобы скопировать пригласительную ссылку <CopyOutlined style={{fontSize: "20px"}} /></span>
    </div>
  )
}

export default InfoBar