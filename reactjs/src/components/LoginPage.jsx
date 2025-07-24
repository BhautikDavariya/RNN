import React from 'react';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Card } from 'antd';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginAccount } from '../redux/actions/userAction';

const LoginPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: 'qotohonybi@mailinator.com',
            password: '1234',
        },
        validate: values => {
            const errors = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) errors.password = 'Required';
            return errors;
        },
        onSubmit: async values => {
            const res = await dispatch(loginAccount(values))
            if (res?.accessToken) {
                window.location.reload()
            }
        },
    });

    return (
        <div className='flex align-middle justify-center content-center flex-col h-screen' >
            <Card title="Create Account" style={{ maxWidth: 500, margin: 'auto' }}>
                <Form onFinish={formik.handleSubmit} layout="vertical">
                    <Form.Item
                        label="Email"
                        validateStatus={formik.errors.email && formik.touched.email ? 'error' : ''}
                        help={formik.touched.email && formik.errors.email ? formik.errors.email : ''}
                    >
                        <Input
                            name="email"
                            type="email"
                            prefix={<MailOutlined />}
                            placeholder="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        validateStatus={formik.errors.password && formik.touched.password ? 'error' : ''}
                        help={formik.touched.password && formik.errors.password ? formik.errors.password : ''}
                    >
                        <Input.Password
                            name="password"
                            prefix={<LockOutlined />}
                            placeholder="Password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            Submit
                        </Button>
                        or <a href="/create">Register now!</a>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default LoginPage;
