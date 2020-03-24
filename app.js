
const argv = require('./config/yargs').argv;
var colors = require('colors/safe');


const {	crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch( comando ){

	case 'listar':
		listarTabla(argv.base, argv.limite)
			.then(data => console.log(data));
	break;

	case 'crear':
		crearArchivo(argv.base, argv.limite)
			.then(archivo => console.log(`Archivo creado :`, colors.green(archivo)))
			.catch(e => console.log(e));
	break;

	default:
		console.log('comando no reconocido');
}

//console.log(argv);

//console.log(argv.base);


//let parametro = argv[2];
//let base = parametro.split('=')[1];

