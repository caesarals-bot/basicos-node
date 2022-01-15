const fs = require('fs')

const crearArchivo = async( base= 5, listar = false, h = 10) => {

    try {
        
    
        let salida = "";
    
        for (let index = 1; index <= h; index++) {
            
            salida +=`${ base } x ${index} = ${ base * index }\n`;
        }
        
        if (listar) { 
            console.log('==================')
            console.log('  Tabla del:', base)
            console.log('==================')

            console.log(salida)
        };
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida); 
    
        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }

   

}

module.exports = {
    crearArchivo
}