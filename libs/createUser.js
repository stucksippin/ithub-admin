const { default: prisma } = require("./prisma");


function createUser() {
    const resp = prisma.users.create({
        data: {
            first_name: 'Мария',
            middle_name: 'Кузнецова',
            last_name: 'Петровна',
            group: 'none',
            email: 'admin',
            password: 'admin',
            role: 'admin'
        }

    })
    console.log(resp);
}

createUser()