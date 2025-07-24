import React from 'react';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Card } from 'antd';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createAccount } from '../redux/actions/userAction';
import LayoutPage from './layout/Layout';

const CreateUserPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
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
            if (res?._id) {
                navigate('/home')
            }
        },
    });

    return (
        <LayoutPage >
            <Card title="Create Account" style={{ maxWidth: 800, margin: 'auto' }}>
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
                        <div className='flex justify-between align-middle'><Button type="primary" htmlType="submit" block>
                            Submit
                        </Button>
                            <span className='w-[80px] text-center'>Or</span>
                            <Button type="primary" block onClick={() => {
                                navigate('/home')
                            }}>
                                Back
                            </Button></div>
                    </Form.Item>
                </Form>
            </Card>
        </LayoutPage>
    );
};

export default CreateUserPage;
