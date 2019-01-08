// requireds
const fs = require("fs");
const colors = require('colors');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';
        for (let i = 0; i <= limite; i++) {
            data = `${base} * ${i} = ${base * i}`;
            console.log(data);
        }
    })
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = "";
        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, err => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}-al-${limite}.txt`);
            }
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
};