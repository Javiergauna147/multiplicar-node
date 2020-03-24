const fs = require('fs');
const colors = require('colors');



let listarTabla = (base, limite = 10) => {
	return new Promise ((resolve, reject) => {

		console.log('=================='.green);
		console.log(`Tabla de ${base}`.green);
		console.log('=================='.green);



		if ( !Number(base) || !Number(limite)){
			reject(`El valor introducido en la base o el limite no es un numero`);
			return;
		}

		let data = '';

		for (var i = 1; i <= limite; i++) {
			data += `${base} * ${i} = ${base * i}\n`;
		}

		resolve(data);

	});




}


let crearArchivo = ( base, limite = 10 ) => {
	return new Promise ((resolve, reject) => {


		if ( !Number(base) || !Number(limite)){
			reject(`El valor introducido en la base o el limite no es un numero`);
			return;
		}

		let data = '';

		for (var i = 1; i <= limite; i++) {
			data += `${base} * ${i} = ${base * i}\n`;
		}
		
		
		fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
		
		if (err) reject(err)
		else
			resolve(`tabla-${base}.txt`)


		});
	});
}
module.exports = {
	crearArchivo,
	listarTabla
}