// const { argv, options } = require("yargs");
//const { number, argv, option, options } = require("yargs");
const {crearArchivo, crearArchivoListar} = require("./funciones");
const argv = require("yargs")
            .option("b",{
                alias: "base",
                type: "number",
                demandOption : true
            })
            .check((argv, options) => {
                if(isNaN(argv.b)){
                    throw "la base debe ser un numero"
                }
                return true;
            })
            .option("l",{alias:"listar", type: "boolean", default: false})
            .option("h",{alias: "hasta", type : "number", demandOption:true})
            .check((argv, options)=>{
                if(isNaN(argv.h)){
                    throw "'hasta' debe ser numerico"
                }
                return true;
            })
            .argv;
console.clear();

console.log(argv);

//console.log(process.argv)

// const [,,arg3 = "base=5"] = process.argv;

// const [, base = 5] = arg3.split("=");

// console.log(base);

// //const base = 3;

// crearArchivo(argv.b)
// .then(nombreArchivo => console.log(nombreArchivo, " creado"))
// .catch(err => console.log(err));

crearArchivoListar(argv.b,argv.l,argv.h)
.then(nombreArchivo => console.log(nombreArchivo, " creado"))
.catch(err => console.log(err));