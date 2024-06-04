import Link from 'next/link'
import React from 'react'

import { getServerSession } from 'next-auth'
import { NextAuthOptions } from '@/config'
import Logout from './Logout'


export default async function Header() {
    const session = await getServerSession(NextAuthOptions)
    return (
        <header className='container mx-auto mt-10'>
            <nav className=''>
                <ul className='flex justify-between border p-4 rounded-xl items-center'>

                    <div>
                        <Link href={'/'}>IThub</Link>
                     
                    </div>
                    <div >
                    <Link className='mr-10' href={'/user/account'}>Профиль</Link>
                        {
                            !!session && <Logout />
                        }
                    </div>

                </ul>
            </nav>
        </header>
    )
}
