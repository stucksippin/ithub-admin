'use client'
import React, { useState } from 'react'
import { Space, Table, Tag } from 'antd';


export default function AdminTable({ users }) {

    const [dataSource, setDataSource] = useState(users)


    const columns = [
        {
            title: 'ФИО',
            key: 'full_name',
            render: (_, record) => (
                <span>{`${record.last_name} ${record.first_name} ${record.middle_name} `}</span>
            ),
        },
        {
            title: 'Группа',
            dataIndex: 'group',
            key: 'group',
        },
        {
            title: 'E-mail',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a>Изменить {record.name}</a>
                    <a>Удалить</a>
                </Space>
            ),
        },
    ];


    return (
        <div>
            <Table className='mt-10' dataSource={dataSource} columns={columns} />
        </div>
    )
}
