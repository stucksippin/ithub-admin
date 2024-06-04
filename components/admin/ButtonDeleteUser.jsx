import React from 'react';
import { Button, message, Popconfirm } from 'antd';

export default function ButtonDeleteUser({ id }) {
    const confirm = async () => {
        try {
            const resp = await fetch('/api/actions/admin/deleteUser', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id })
            });

            const result = await resp.json();

            if (result.result === "OK") {
                message.success('Пользователь успешно удален');
            } else {
                message.error('Ошибка при удалении пользователя');
            }
            
        } catch (error) {
            console.error('Error deleting user:', error);
            message.error('Ошибка при удалении пользователя');
        }
    };

    const cancel = () => {
        message.info('Удаление отменено');
    };

    return (
        <Popconfirm
            title="Удалить пользователя?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Да"
            cancelText="Нет"
        >
            <Button danger>Удалить</Button>
        </Popconfirm>
    );
}
