## Instrucciones

1. Crea y despliega tu servidor, utiliza las librerias de express y nodemon.
2. En base al modelo MVC, deberas crear los siguientes 3 archivos
    1. users.controllers.js
    2. users.services.js
    3. users.router.js
3. Deberas recibir los siguientes verbos a las siguientes rutas
    1. /users 
        1. GET → Al hacer esta peticion deberas de retornar todos los usuarios
        2. POST → Al hacer esta peticion, manejaras el req del cliente y crearas un nuevo usuario
    2. /users/:id
        1. GET → Al hacer esta petición deberas retornar el usuario con el ID en especifico que recibes desde parametros
4. En tu base de datos ficticia, deberas almacenar un arreglo de objetos, los objetos de los usuarios deberan tener lo siguiente:
    
    ```jsx
    {
    	id: 1,
    	first_name: 'string',
    	last_name: 'string',
    	email: 'string',
    	password: 'string',
    	birthday: 'YYYY/MM/DD'
    }
    ```
    
5. Deberan subirlo a un repositorio y publicarlo en el class-center