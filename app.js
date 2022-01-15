
const { crearArchivo } = require('./helpers/multiplicar')

const argv = require('./config/yargs');


console.clear()








// const [,,arg3 = 'base=5' ] = process.argv; 

crearArchivo( argv.b, argv.listar, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch( err => console.log ( err ));




    

