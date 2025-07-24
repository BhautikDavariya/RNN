import React, { useEffect } from 'react';
import { Button, Card, Table } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/actions/userAction';
import LayoutPage from './layout/Layout';
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
// const dataSource = Array.from({ length: 100 }).map((_, i) => ({
//     key: i,
//     name: `Edward King ${i}`,
//     age: 32,
//     address: `London, Park Lane no. ${i}`,
// }));
const HomePage = () => {
    const { users } = useSelector(state => state?.users)
    const dispatch = useDispatch()
    const router = useNavigate()
    console.log('users', users)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    const dataSource = users.map((user, i) => ({
        ...user,
        key: i,
    }));

    return (
        <LayoutPage>
            <div className='' >
                <Card title="Create Account" extra={
                    <>
                        <Button className='shadow-md' onClick={() => {
                            router('/user-create')
                        }}>Add New</Button>
                    </>
                } className='shadow-md'>
                    <Table
                        columns={columns}
                        dataSource={dataSource || []}
                        className=''
                        pagination={{ pageSize: 50 }}
                        scroll={{ y: 160 * 5 }}
                    />
                </Card>
            </div>
        </LayoutPage>
    );
};
export default HomePage;