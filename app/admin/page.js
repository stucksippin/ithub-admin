import AdminTable from '@/components/AdminTable'
import ButtonAddUser from '@/components/admin/ButtonAddUser'
import getAllUsers from '@/libs/admin/getAllUsers'
import React from 'react'

export default async function AdminPage() {
    const users = await getAllUsers()
    return (
        <div>
            <ButtonAddUser />
            <AdminTable users={users} />
        </div>
    )
}
