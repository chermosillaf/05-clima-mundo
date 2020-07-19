const argv  = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


// argv.direccion


// lugar 


// const coordenadas = lugar.getLugarLongLat (argv.direccion)
//                          .then  ( resp => resp )
//                          .catch ( console.log )

// console.log(coordenadas);


// clima.getClima( -38.43443, -71.89051 )
//      .then( resp => console.log( resp ) )
//      .catch( err => console.log( err ) )


clima.getInfo( argv.direccion )
     .then ( console.log )
     .catch( console.log ) 