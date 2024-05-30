import prisma from "@/libs/prisma"

export async function POST(resp) {
    const data = resp.json()
    const query = await prisma.users.create({
        data: {
            first_name: resp.first_name,
            middle_name: resp.middle_name,
            last_name: resp.last_name,
            group: resp.group,
            email: resp.email,
            password: resp.password,
            role: resp.role
        }
    })

    console.log(query);
}