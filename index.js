



const verificadorService = require('./Service/VerificadorService.js');


exports.handler = async  (event) => {
    let respuesta = verificadorService.validateADN(event.dna);
    var response ;

    if(respuesta == true){
       response = {
        statusCode: 200,
        body : JSON.stringify(respuesta)
       }
    }else{
        response = {
           statusCode: 403,
           body : JSON.stringify(respuesta)
        }
    }
    return response;
};
