import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { useHistory } from "react-router-dom";
import "./Join.css"  

import queryString from "query-string";


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Join = (props) => {
  const history = useHistory()
  const [name, setName] = useState()

  const { room } = queryString.parse(props.location.search);

  const onFinish = () => {
    history.push(`/room?name=${name}&room=${room}`)
  }

  return (
    <div className="outerContainer">
      <Form
        className="loginForm"
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label={<label style={{ color: "white" }}>Никнейм</label>}
          name="Никнейм"
          style={{ color: "white" }}
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите никнейм",
            },
          ]}
        >
          <Input onChange={e => setName(e.target.value)} />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Join;
