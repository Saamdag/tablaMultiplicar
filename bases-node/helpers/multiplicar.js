const fs = require('fs');
const colores = require('colors')

const crearArchivoTabla = async (base = 0,l,h=10)=>{
    try {
        
        
        let salida = '';
        let consola = '';
        
        for(let i = 1; i<=h;i++){
            salida +=`${base} x ${i}=${base*i}\n`;
            consola +=`${base} ${'x'.bgYellow.black} ${i}=${base*i}\n`;
        }
        if(l){
            console.log('=============='.rainbow);
            console.log(`Tabla del: ${base}`);
            console.log('=============='.rainbow);
            console.log(consola);
        }
        let nombreArchivo = `tabla-${base}.txt`;
        fs.writeFileSync(`./salida/${nombreArchivo}`,salida);
        return nombreArchivo

    } catch (err) {
        throw err;
    }

}


module.exports= {
    crearArchivoTabla
}


