import React from 'react';
import { Button, Form, Input } from 'antd';
import axios from 'axios';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};
const App = () => {
    const formRef = React.useRef(null);

    const onFinish = async (values) => {
        console.log(values);
        const customConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const response = await axios.post("http://localhost:2244/api/newuser", JSON.stringify(values), customConfig);
        console.log("response", response);
        formRef.current?.resetFields();
    };
    const onReset = () => {
        formRef.current?.resetFields();
    };

    return (
        <div style={{ textAlign: "-webkit-center", padding: "2em", backgroundColor: "azure" }}>
        <Form
            {...layout}
            ref={formRef}
            name="control-ref"
            onFinish={onFinish}
            style={{
                maxWidth: 600,
            }}
        >
            <Form.Item
                name="firstName"
                label="FirstName"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="lastName"
                label="LastName"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="email"
                label="Email"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="userName"
                label="Username"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                    <Button style={{marginLeft: "1em"}} htmlType="button" onClick={onReset}>
                    Reset
                </Button>
            </Form.Item>
            </Form>
            </div>
    );
};
export default App;