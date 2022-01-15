

const argv = require('yargs')
.option('b', {
    alias: 'base',
    type : 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
})
.option('l', {
    alias: 'listar',
    type : 'boolean',
    default: false,
    describe: 'muestra la tabla en consola' 
})
.option('h', {
    alias: 'limit',
    type : 'number',
    describe: 'Da un limite a la lista' 
})
.check( (argv, options) => {
    if( isNaN( argv.b )){
        throw 'Labase tiene que ser un numero'
    }
    return true;
} )
.argv;

module.exports = argv;