class MiError extends Error {
    constructor(mensaje, status) {
       super(mensaje);
       this.status = status || 500; // Valor predeterminado: 500 (Internal Server Error)
    }
 
 }

 module.exports = MiError;