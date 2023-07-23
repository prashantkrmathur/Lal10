import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

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
    const [response, setResponse] = useState("")

    const onFinish = async (values) => {
        const customConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const response = await axios.post("http://localhost:2244/api/newuser", JSON.stringify(values), customConfig);
        setResponse(response.data.message)
        formRef.current?.resetFields();
    };
    const onReset = () => {
        formRef.current?.resetFields();
    };

    return (
        <div style={{ textAlign: "-webkit-center", padding: "2em", backgroundColor: "azure" }}>
            <div className='w-100 text-center mt-2'
                style={{
                    fontSize: "x-large",
                    color: "brown",
                    marginLeft: "3em",
                    marginBottom: "1em"
                }}>
                {response}
            </div>
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
                    <Button style={{ marginLeft: "1em" }} htmlType="button" onClick={onReset}>
                        Reset
                    </Button>
                </Form.Item>
            </Form>
            <div className='w-100 text-center mt-2' style={{ marginLeft: "5em" }}>
                Have an account  ? <Link to='/login'>Login</Link>
            </div>
        </div>
    );
};
export default App;