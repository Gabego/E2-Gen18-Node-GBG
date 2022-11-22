//? importancion de controladores
const userControllers = require('./users.controllers')

//? Entrega de resultado de consulta de todos los usuarioa
const getAllUsers = (req, res) => {
    const data = userControllers.findAllUsers()
    res.status(200).json(data)
}

//?Entrega de resultado de busqueda de usuario por ID
const getUserById = (req, res) => {
    const id = req.params.id
    const data = userControllers.findUserById(id)
    if(data) {
        //?Caso exitoso
        res.status(200).json(data)
    } else {
        //! Error
        res.status(404).json({message: 'Invalid Id'})
    }
}

//? CRear un nuevo usuario
const postNewUser = (req,res) => {
    const {first_name, last_name, email, password, birthday} = req.body
    if (first_name && last_name && email && password) {
        //?Caso exitoso
        const data = userControllers.createNewUser({first_name, last_name, email, password, birthday})
        res.status(201).json(data)
    } else {
        //!error
        res.status(400).json({message: 'Invalid Data',
         fields: {
            first_name:'String(*)',
            last_name:'String(*)',
            email:'name@email.com(*)',
            password:'string(*)',
            birthday: 'YYYY/MM/DD'
        }
    });
    }
}


module.exports = {
    getAllUsers,
    getUserById,
    postNewUser
}