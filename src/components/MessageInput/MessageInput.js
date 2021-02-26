import React, { useRef, useEffect }  from "react";
import { Form, Input, FormItem, Button } from "antd";

const MessageInput = ({ message, sendMessage, setMessage }) => {
  const [form] = Form.useForm();
  const inputEl = useRef(null)
  const send = () => {
    sendMessage();
    form.resetFields();
    inputEl.current.focus();
  }

  return (
    <Form
      initialValues={{
        remember: true,
      }}
      layout="inline"
      style={{ width: "80%" }}
      onFinish={send}
      form={form}
      // onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="message"
        rules={[
          {
            required: false,
          },
        ]}
        style={{ marginRight: 0, width: "80%" }}
      >
        <Input
          placeholder="Введите сообщение"
          value={message}
          ref={inputEl}
          onChange={(e) => setMessage(e.target.value)}
          style={{ marginRight: 0 }}
        />
      </Form.Item>
      <Form.Item style={{ width: "20%", marginRight: 0 }}>
        <Button
          type="primary"
          htmlType="submit"
          style={{ marginRight: 0, width: "100%" }}
        >
          Отправить
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MessageInput;
