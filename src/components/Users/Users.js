import React from 'react';
import { Badge } from 'antd'

const Users = ({users}) => {
  return(
    <div style={{color: 'white'}}>
      <h2 style={{color: 'white'}}>Пользователи онлайн:</h2>
      {users ? (users.map((user, id) =>  <div><Badge color="green" style={{ paddingLeft: 10 }} /> <span>{user.name}</span></div>)) : ''}
    </div>
  )
}

export default Users