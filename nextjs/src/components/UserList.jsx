'use client'
import React, { useEffect } from 'react';
import { Button, Card, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { fetchUsers } from '@/redux/slice/userSlice';
import LayoutPage from './Home/LayoutPage';
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        width: 150,
        sorter: (a, b) => a.name.length - b.name.length,
    },
    {
        title: 'Email',
        dataIndex: 'email',
        sorter: (a, b) => a.email.length - b.email.length,
    }

];

const UserList = () => {
    const { users } = useSelector(state => state?.users)
    const dispatch = useDispatch()
    const router = useRouter()
    console.log('users', users)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    const dataSource = users.map((user, i) => ({
        ...user,
        key: i,
    }));

    return (
        <div className='' >
            <Card title="Create Account" extra={
                <>
                    <Button className='shadow-md' onClick={() => {
                        router.push('/users/create')
                    }}>Add New</Button>
                </>
            } className='shadow-md'>
                <Table
                    columns={columns}
                    dataSource={dataSource || []}
                    className=''
                    pagination={{ pageSize: 10 }}
                    scroll={{ y: 160 * 5 }}
                />
            </Card>
        </div>
    );
};
export default UserList;