// const { PrismaClient } = require('@prisma/client');
// const fs = require('fs');
// const bcrypt = require('bcrypt');



// const prisma = new PrismaClient()
// function appendUsers() {
//     let students;

//     fs.readFile('libs/studentsWPasswords.json', 'utf8', (err, data) => {
//         if (err) {
//             console.log(err)
//         }

//         try {
//             students = JSON.parse(data)



//             console.log(students)

//             students.forEach(async student => {

//                 const resp = await prisma.users.create({
//                     data: {
//                         first_name: student.first_name,
//                         middle_name: student.middle_name,
//                         last_name: student.last_name,
//                         email: student.email,
//                         group: student.group,
//                         password: await bcrypt.hash(student.password, 10)
//                     }
//                 })

//                 console.log(resp)

//             });
//         }
//         catch (err) {
//             console.error(err)
//             return
//         }
//     })




// }

// appendUsers()