'use client'
import React, { useState } from 'react'
import { Space, Table, Tag } from 'antd';
import ButtonChangeUser from './admin/ButtonChangeUser';
import ButtonDeleteUser from './admin/ButtonDeleteUser';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/locale/ru_RU'


export default function AdminTable({ users }) {

    const [dataSource, setDataSource] = useState(users)




    const columns = [
        {
            title: 'ФИО',
            key: 'first_name',
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
            title: 'Действия',
            key: 'action',
            render: (_, user) => (
                <Space size="middle">
                    <ButtonChangeUser {...user} />
                    <ButtonDeleteUser id={user.id} />
                </Space>
            ),
        },
    ];


    return (
        <div className='admin__table'>
            <ConfigProvider locale={ruRU}>
                <Table className='mt-10 ' dataSource={dataSource} columns={columns} />
            </ConfigProvider>
        </div>
    )
}
