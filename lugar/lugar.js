/**
 * 
 */

const axios = require('axios');

const getLugarLongLat = async (direccion ) => {

    const encodeUlr = encodeURI( direccion );

    const instance = axios.create({
            baseURL: `https://geocode.xyz/${ encodeUlr }?json=1`
            // ,headers: {'X-Custom-Header': 'foobar'}
        });
    
        const resp = await instance.get();

        // console.log(resp);
        if ((resp.data.length === 0) || (typeof resp.data.error !== 'undefined') )
        {
            throw new Error(`No hay resultados para la dirección "${ direccion }" (Error: ${resp.data.error.code})`);
        }
        
        const dire   = `${resp.data.standard.city}, ${resp.data.standard.countryname}`;
        const latt   = resp.data.latt;
        const long   = resp.data.longt;
        const alt    = resp.data.alt;

        // const postal = resp.data.alt.loc.postal;
        // const region = resp.data.alt.loc.region;

        // instance.get()
        //       .then( resp => {
        //           console.log(resp.data);
        //       })  
        //       .catch( err => {
        //           console.log('ERRROR !!!!', err);
        //       })
    
        return { dire, latt, long, alt }
}

module.exports = {
    getLugarLongLat
}          