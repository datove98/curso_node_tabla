const fs = require("fs");

const crearArchivo = async (base = 5) => {

    try {
        console.log("================");
        console.log("   Tabla del:", base);
        console.log("================");
    
        let salida = "";
    
        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i }\n`;
        }
    
        console.log(salida);
    
        fs.writeFileSync(`tabla-${base}.txt`,salida);
    
        return(`tabla-${base}.txt creado`);
    } catch (error) {
        throw error;
    }
}

const crearArchivoListar = async (base = 5, mostrar, hasta = 1) => {

    try {
        if (mostrar)
        {
            console.log("================");
            console.log("   Tabla del:", base);
            console.log("================");
            let salida = "";
            for (let i = 1; i <= hasta; i++) {
                salida += `${base} x ${i} = ${base * i }\n`;
            }
            console.log(salida);
            fs.writeFileSync(`../salida/tabla-${base}.txt`,salida);
        }
        else{

        }
        return(`tabla-${base}.txt creado`);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo,
    crearArchivoListar
}