import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom'

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
    const [error, setError] = useState(null);
    const [response, setResponse] = useState("");

    const fetchData = async (values) => {
        try {
            const customConfig = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            const response = await axios.post("https://tasty-gold-seagull.cyclic.app/api/user", JSON.stringify(values), customConfig);
            return response;
        } catch (error) {
            setError(error); // Store the error in state
        }
    };
    const onFinish = async (values) => {
        console.log(values);
        const response =await fetchData(values);
        setResponse(response)
        formRef.current?.resetFields()
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
                {error && error.response && error.response.data && error.response.data.message}
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
                </Form.Item>
            </Form>
            <div className='w-100 text-center mt-2' style={{ marginLeft: "5em" }}>
                Need an account ? <Link to='/signup'>Sign Up</Link>
            </div>
            {
                response && response.data && response.data.success &&
                <Redirect to={{ pathname: "/dashboard" , state:response.data}}> </Redirect>
            }
        </div>
    );
};
export default App;