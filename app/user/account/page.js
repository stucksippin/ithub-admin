import { NextAuthOptions } from '@/config'
import { getServerSession } from 'next-auth'
import prisma from '@/libs/prisma';




export default async function AccountPage() {
    const session = await getServerSession(NextAuthOptions);

    let data = null;

    if (session) {
        data = await prisma.users.findFirst({
            where: {
                id: session.user.id
            }
        });
    }



 

    return (
        <div className='container bg-white rounded-xl pt-10'>

            <>
                <h2 className='font-bold text-center text-2xl'>Профиль</h2>
                <div className='flex flex-col mt-5'>
                    <span className='text-lg'>Пользователь: <span className='font-bold text-indigo-500'>{data.last_name} {data.first_name} {data.middle_name} </span></span>
                </div>

            </>
        </div>
    );
}

