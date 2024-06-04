// ButtonChangeUser.js
'use client'
import React, { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Button, Modal, Input, Select } from 'antd'

export default function ButtonChangeUser({id, first_name, middle_name, last_name, group, email}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        const form = document.querySelector(`#form-${id}`);
        handleChange(form);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onChange = (value) => {
        console.log(`selected ${value}`);
    };

    const onSearch = (value) => {
        console.log('search:', value);
    };
    
    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    async function handleChange(form) {
        const formData = new FormData(form);

        const resp = await fetch('/api/actions/admin/changeUser', {
            method: 'PATCH',
            body: formData
        });

        const result = await resp.json();
        setIsModalOpen(false); // Закрыть модальное окно после успешного изменения
        console.log(result); // Вывод результата для проверки
    }

    return (
        <>
            <Button type="primary" onClick={showModal}>Изменить</Button>
            <Modal title="Изменение пользователя" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <form id={`form-${id}`} className=''>
                    <input type="text" name='id' value={id} hidden />
                    <Input defaultValue={last_name} name="last_name" className='mt-4' placeholder="Фамилия" prefix={<UserOutlined />} />
                    <Input defaultValue={first_name} name="first_name" className='mt-4' placeholder="Имя" prefix={<UserOutlined />} />
                    <Input defaultValue={middle_name} name="middle_name" className='mt-4' placeholder="Отчество" prefix={<UserOutlined />} />
                    <Input defaultValue={email} name="email" className='mt-4' placeholder="E-mail"/>
                    <Select
                        className='mt-4'
                        defaultValue={group}
                        showSearch
                        placeholder="Группа"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={filterOption}
                        options={[
                            { value: 'ИСП1', label: 'ИСП1' },
                            { value: 'ИСП2', label: 'ИСП2' },
                            { value: 'ИСП3', label: 'ИСП3' },
                        ]}
                    />
                </form>
            </Modal>
        </>
    );
}
