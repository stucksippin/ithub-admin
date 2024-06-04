import React from 'react';
import { Button, message, Popconfirm } from 'antd';

export default function ButtonDeleteUser({id}) {
    const confirm = (e) => {
        console.log(e);
        message.success('Click on Yes');
      };
      const cancel = (e) => {
        console.log(e);
        message.error('Click on No');
      };



      async function handleDelete(e) {
        const id = e.target.dataset.id

        const resp = await fetch('/api/actions/admin/deleteUser', {
            method: 'DELETE',
            body: JSON.stringify({
                id: id
            })
        })
    }

  return (
    <Popconfirm
    onPopupClick={handleDelete}
    data-id={id}
    title="Удалить пользователя?"
    onConfirm={confirm}
    onCancel={cancel}
    okText="Да"
    cancelText="Нет"
  >
    <Button danger>Удалить</Button>
  </Popconfirm>
  )
}


