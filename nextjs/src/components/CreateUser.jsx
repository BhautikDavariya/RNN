'use client'
import React from 'react';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Card } from 'antd';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { createAccount } from '@/redux/slice/userSlice';

const CreateUser = () => {
    const dispatch = useDispatch()
    const navigate = useRouter()
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            remember: false,
        },
        validate: values => {
            const errors = {};
            if (!values.name) errors.name = 'Required';
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
            const res = await dispatch(createAccount(values))
            const token = localStorage.getItem('token')
            if (res?.payload?._id) {
                token ? navigate.push('/users') : navigate.push('/login')
            }
        },
    });

    return (
        <div className='flex align-middle justify-center content-center flex-col h-svh' >
            <Card title="Create Account" style={{ width: 900, maxWidth: 800, margin: 'auto' }}>
                <Form onFinish={formik.handleSubmit} layout="vertical">
                    <Form.Item
                        label="Name"
                        validateStatus={formik.errors.name && formik.touched.name ? 'error' : ''}
                        help={formik.touched.name && formik.errors.name ? formik.errors.name : ''}
                    >
                        <Input
                            name="name"
                            prefix={<UserOutlined />}
                            placeholder="Name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Form.Item>

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
                        <Checkbox
                            name="remember"
                            checked={formik.values.remember}
                            onChange={e => formik.setFieldValue('remember', e.target.checked)}
                        >
                            Remember me
                        </Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            Submit
                        </Button>
                        or <a href="/">Login now!</a>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default CreateUser;
