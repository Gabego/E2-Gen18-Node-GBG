//? creacion de base de datos UserDB
const usersDB = []
let id = 1

//*{
//*    id: 1,
//*    first_name: 'string',
//*    last_name: 'string',
//*    email: 'string',
//*    password: 'string',
//*    birthday: 'YYYY/MM/DD'
//*}


//? Mostrar toda la base de datos userDB
const findAllUsers = () => {
    return usersDB
}

//? Mostar un usuario que se busca por ID
const findUserById = (id) => {
    const data = usersDB.find(user => user.id == id)
    return data
}

//? CRear un usuario nuevo
const createNewUser = (obj) => {
    const newUser = {
        id: id++,               //*valor dado por BankEnd
        first_name: obj.first_name,
        last_name: obj.last_name,
        email: obj.email,
        password: obj.password,
        birthday: obj.birthday || '01/01/2022'  //?campo opcional
    }
    usersDB.push(newUser)
    return newUser
}



module.exports = {
    findAllUsers,
    findUserById,
    createNewUser
}

