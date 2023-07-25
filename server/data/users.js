import bcrypt from 'bcryptjs'
const Users = [
    {
        name : 'cheng',
        email : 'cheng@gmail.com',
        password : bcrypt.hashSync('123456',12),
        isAdmin : true
    }, 
]
export default Users