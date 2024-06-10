'use client'
import React, { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Button, Modal, Input, Select, Switch } from 'antd'

export default function ButtonAddUser({ id, first_name, middle_name, last_name, group, email, password, role }) {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(group);
  const [isAdmin, setIsAdmin] = useState(true); // Default value set to true

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    const form = document.querySelector(`#form-${id}`);
    handleCreate(form)
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onChangeGroup = (value) => {
    setSelectedGroup(value);
  };

  const onSearch = (value) => {
    console.log('search:', value);
  };

  const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  const onRoleChange = (checked) => {
    setIsAdmin(checked);
  };

  async function handleCreate(form) {
    const formData = new FormData(form);
    formData.set('group', selectedGroup); // Add the selected group to the formData
    formData.set('role', isAdmin ? 'admin' : 'user'); // Add the role to the formData
    console.log(Array.from(formData.entries()));
    const resp = await fetch('/api/actions/admin/addUser', {
      method: 'PUT',
      body: formData
    });
    console.log(resp);
  }

  return (
    <>
      <Button className='mt-10 bg-[#921CB0]' type="primary" onClick={showModal}>Добавить пользователя</Button>
      <Modal title="Добавление пользователя" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <form id={`form-${id}`} onSubmit={(e) => { e.preventDefault(); handleCreate(e.target); }} className='mt-10'>
          <input type="text" name='id' value={id} hidden />
          <Input defaultValue={last_name} name='last_name' className='mt-4' placeholder="Фамилия" prefix={<UserOutlined />} />
          <Input defaultValue={first_name} name='first_name' className='mt-4' placeholder="Имя" prefix={<UserOutlined />} />
          <Input defaultValue={middle_name} name='middle_name' className='mt-4' placeholder="Отчество" prefix={<UserOutlined />} />
          <Input defaultValue={email} name='email' className='mt-4' placeholder="E-mail" />
          <Input defaultValue={password} name='password' className='mt-4' placeholder="Пароль" type='password' />
          <div className='flex flex-col'>

            <Select
              className='mt-4'
              defaultValue={group}
              showSearch
              placeholder="Группа"
              optionFilterProp="children"
              onChange={onChangeGroup}
              onSearch={onSearch}
              filterOption={filterOption}
            >
              {["ИСП1", "ИСП2", "ИСП3", "ИСП4", "ИСП5"].map((option) => (
                <Select.Option key={option} value={option}>
                  {option}
                </Select.Option>
              ))}
            </Select>
            <Switch className='mr-5 mt-4' checkedChildren="admin" unCheckedChildren="user" defaultChecked onChange={onRoleChange} />
          </div>
        </form>
      </Modal>
    </>
  );
}
