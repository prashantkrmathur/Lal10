// import React, { useRef, useState } from 'react';
// import axios from 'axios';
// import { Form, Button, Card, Alert } from "react-bootstrap";
// import { Link, useHistory } from 'react-router-dom'

// const Login = () => {
//     const emailRef = useRef();
//     const passwordRef = useRef();
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false);
//     const history = useHistory();

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             setError('')
//             setLoading(true)
//             const customConfig = {
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             };
//             const data = {
//                 email: emailRef.current.value.trim(),
//                 password: passwordRef.current.value.trim()
//             }
//             console.log("datat",data)
//             const response = await axios.post("http://localhost:2244/api/user", JSON.stringify(data), customConfig);
//             console.log("response", response);
//             history.push('/dashboard')

//         } catch (error) {
//             setError('Failed to login')
//         }
//         setLoading(false)
//     }
//     return (
//         <div style={{ position: 'fixed', top: '10%', left: "44%", marginTop: '-50px', marginLeft: '-100px' }}>
//             <Card style={{ minWidth: '400px' }}>
//                 <Card.Body>
//                     <h2 className='text-center mb-4'>Log In</h2>
//                     {error && <Alert variant='danger' >{error}</Alert>}
//                     <Form onSubmit={handleSubmit}>
//                         <Form.Group id='email' style={{ marginBottom: '15px' }}>
//                             <Form.Label>Email</Form.Label>
//                             <Form.Control type='email' ref={emailRef} required></Form.Control>
//                         </Form.Group>
//                         <Form.Group id='password' style={{ marginBottom: '15px' }}>
//                             <Form.Label>Password</Form.Label>
//                             <Form.Control type='password' ref={passwordRef} required></Form.Control>
//                         </Form.Group>
//                         <Button disabled={loading} className='w-100' type='submit'>Log In</Button>
//                     </Form>
//                 </Card.Body>
//             </Card>
//             <div className='w-100 text-center mt-2'>
//                 Need an account ? <Link to='/signup'>Sign Up</Link>
//             </div>
//         </div>
//     )
// }

// export default Login


import React from 'react';
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom'

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
    const history = useHistory();

    const onFinish = async (values) => {
        console.log(values);
        const customConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const response = await axios.post("http://localhost:2244/api/user", JSON.stringify(values), customConfig);
        console.log("response", response);
        formRef.current?.resetFields();
        history.push('/dashboard')

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
                    height: 600
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
        </div>
    );
};
export default App;