import React from 'react'
import CreateUserPage from '@/components/CreateUser'
import LayoutPage from '@/components/Home/LayoutPage'

export const metadata = {
    title: 'login',
    description: '...',
}

const page = () => {
    return (
        <LayoutPage><CreateUserPage /></LayoutPage>
    )
}

export default page