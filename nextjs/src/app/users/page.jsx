import React from 'react'
import LayoutPage from '@/components/Home/LayoutPage'
import UserList from '@/components/UserList'

export const metadata = {
    title: 'login',
    description: '...',
}

const page = () => {
    return (
        <LayoutPage><UserList /></LayoutPage>
    )
}

export default page