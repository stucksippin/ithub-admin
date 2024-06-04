import prisma from "@/libs/prisma"


export async function DELETE(request) {
    const { id } = await request.json()
    console.log(id)


    const resp = await prisma.users.delete({
        where: {
            id: parseInt(id)
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