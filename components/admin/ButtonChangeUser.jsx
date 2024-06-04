
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
      setIsModalOpen(false);
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
    
    // Filter `option.label` match the user type `input`
    const filterOption = (input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase());



      async function handleChange(e) {
        e.preventDefault()

        const formData = new FormData(e.target)

        const resp = await fetch('/api/actions/admin/changeUser', {
            method: 'PATCH',
            body: formData
        })

        const result = await resp.json()

    }

  return (
    <form onClick={handleChange} className=''> 
      <Button type="primary" onClick={showModal}>Изменить</Button>
      <Modal title="Изменение пользователя" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <input type="text" name='id' value={id} hidden />
      <Input defaultValue={last_name} className='mt-4' placeholder="Фамилия" prefix={<UserOutlined />} />
      <Input defaultValue={first_name} className='mt-4' placeholder="Имя" prefix={<UserOutlined />} />
      <Input defaultValue={middle_name} className='mt-4' placeholder="Отчество" prefix={<UserOutlined />} />
      <Input defaultValue={email} className='mt-4' placeholder="E-mail"/>
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
      {
        value: 'ИСП1',
        label: 'ИСП1',
      },
      {
        value: 'ИСП2',
        label: 'ИСП2',
      },
      {
        value: 'ИСП3',
        label: 'ИСП3',
      },
    ]}
  />

        
      </Modal>
    </form>
  )
}
