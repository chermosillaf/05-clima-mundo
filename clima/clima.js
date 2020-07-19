
/**
 * 
 * api.openweathermap.org/data/2.5/weather?lat=-38.43443&lon=-71.87780&appid=6a8691b5af5da14f0395382c3c04b177&units=metric
 */

 const axios = require('axios');
 const lugar = require('../lugar/lugar');


 const getClima = async (lat, lon, appid = '6a8691b5af5da14f0395382c3c04b177', units = 'metric') => {

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}&units=${units}`;
    const resp = await axios.get(apiUrl);

    console.log(resp);
    if (resp.data.length === 0)
    {
        throw new Error('No se encontró datos del cliema para las coordenadas indicadas');
    }

    return resp.data.main.temp;

 }

 const getInfo = async ( direccion ) => {

    try 
    {
        throw new Error('Error personalizado ');

        const coordenadas = await lugar.getLugarLongLat ( direccion );
        const temperatura = await getClima( coordenadas.latt , coordenadas.long );
    
        return ( `El clima de ${direccion} es de ${ temperatura } grados ` );
        
    } 
    catch (e) 
    {    
        console.log(e.code);
        return `No se pudo determinar el clima para ${direccion}`;
    }

    // .then( resp => console.log( resp ) )
    // .catch( err => console.log( err ) )

 }

 module.exports = {
     getClima,
     getInfo
 }