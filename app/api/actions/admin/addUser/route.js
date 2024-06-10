import prisma from "@/libs/prisma"
import { hash } from "bcrypt"


export async function PUT(request) {
    const body = await request.formData()
    const data = Object.fromEntries(body)
    console.log(data)

    const resp = await prisma.users.create({
        data: {
            first_name: data.first_name,
            middle_name: data.middle_name,
            last_name: data.last_name,
            group: data.group,
            role: data.role,
            email: data.email,
            password: await hash(data.password, 10),
        }
    })

    return Response.json({
        result: "OK"
    })

}