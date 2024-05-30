import React from 'react'
import prisma from '../prisma'

export default async function getAllUsers() {
    const users = await prisma.users.findMany()
    return users
}
