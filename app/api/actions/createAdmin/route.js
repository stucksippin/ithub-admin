import prisma from "@/libs/prisma"
import { hash } from "bcryptjs";
export async function PUT(resp) {
    const data = await resp.json()
    console.log(data)
    const query = await prisma.users.create({
        data: {
            first_name: data.first_name,
            middle_name: data.middle_name,
            last_name: data.last_name,
            group: data.group,
            email: data.email,
            password: await hash(data.password, 10),
            role: data.role
        }
    })

    console.log(query);
}