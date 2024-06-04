import prisma from "@/libs/prisma"


export async function PATCH(request) {
    const body = await request.formData()
    const data = Object.fromEntries(body)
    console.log(data)

  
    const resp = await prisma.users.update({

        data: {
            first_name: data.first_name,
            middle_name: data.middle_name,
            last_name: data.last_name,
            group: data.group,
            email: data.email
        },
        where: {
            id: parseInt(data.id)
        }
    })

    if (resp) {
        return Response.json({
            result: "OK"
        })
    } else {
        return Response.json({
            result: "fail"
        })
    }

}