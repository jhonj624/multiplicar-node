const argv = require('./config/yargs').argv;
const colors = require('colors');



const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");


let comando = argv._[0];

switch (comando) {

    case 'listar':
        console.log('=========================='.red);
        console.log(`Tabla del ${argv.base}`.red);
        console.log('=========================='.red);

        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(result => {

                console.log('Arachivo creado', `${result}`.red);
            })
            .catch(err => {
                console.log(err);
            });
        break;

    default:
        console.log('comando no reconocido');
}
//let base = 4;


console.log(argv);
console.log(argv.b);
console.log('Limite', argv.l);

/* 
let r = argv2[2];

console.log(r);
let rr = r.split("=");
base = rr[1];

 */