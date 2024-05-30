import AdminTable from '@/components/AdminTable'
import getAllUsers from '@/libs/admin/getAllUsers'
import React from 'react'

export default async function AdminPage() {
    const users = await getAllUsers()
    return (
        <div>
            <AdminTable users={users} />
        </div>
    )
}
