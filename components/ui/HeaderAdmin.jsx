import Link from 'next/link'
import React from 'react'

import { getServerSession } from 'next-auth'
import { NextAuthOptions } from '@/config'
import Logout from './Logout'


export default async function HeaderAdmin() {
    const session = await getServerSession(NextAuthOptions)
    return (

        <header className='bg-[#E6E8EA] w-[300px] font-semibold rounded-r-[50px]'>
            <nav className='w-[250px] mx-auto' >
                <ul className='flex flex-col'>
                    <li className='text-xl text-center mt-5'>   <Link href={'/'}>IThub | Админ</Link>  </li>
                    <div className='mt-10'>
                        <label className='text-[#838484]'>Действия</label>
                        <li className='ml-10'>
                            {
                                !!session && <Logout />
                            }
                        </li>
                    </div>

                </ul>
            </nav>
        </header>
        // <header className='container mx-auto mt-10'>
        //     <nav className=''>
        //         <ul className='flex justify-between border p-4 rounded-xl items-center'>

        //             <div>
        //                 <Link href={'/'}>IThub | Админ</Link>
        //             </div>
        //             <div >
        //                 {
        //                     !!session && <Logout />
        //                 }
        //             </div>

        //         </ul>
        //     </nav>
        // </header>
    )
}
