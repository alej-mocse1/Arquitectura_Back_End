# Arquitectura Back End

¡Bienvenido al repositorio de Arquitectura Back End! En este proyecto encontrarás varios proyectos desarrollados en Node.js con el objetivo de crear una REST API academica orientada en Star Wars. la misma tendra una Arquitectura de microservicios con lo cual cada uno de los proyectos individuales cumplira una funcion muy especifica, lo cual hace que tengamos un conjunto de aplicaciones comunicandose entre si


## ejecución

Para comenzar, asegúrate de tener Node.js instalado en tu máquina. Luego, sigue estos pasos:

1. Clona este repositorio en tu máquina local.
2. Ejecuta el siguiente comando para instalar todas las dependencias necesarias en cada uno de los proyectos:

   ```bash
   npm install

3. es necesario tener docker para que todas las aplicaciones se puedan comunicar entre si, para esos crearemos las imagenes con los archivos dockerfile que ya estan definidos en cada uno de los proyectos

4. una vez que tengamos todas las imagenes tenemos que crear una red local con docker y que todas las aplicaciones se conecten ahi para que puedan comunicarse entre si

5.  una vez que tenemos nuestros contenedores comunicandose entre si con la red que creamos podemos hacer peticiones get a las rutas definidas en el gateway y este las va a redireccionar a cada uno de los proyectos(dependiendo de a que ruta se llame), cada uno de estos proyectos va a realizar una consulta a la base de datos que a su vez esta manejando su propia logica ya que tambien es un proyecto individual


## Contribución

Si quieren contribuir a este proyecto,  estoy abierto a mejoras, correcciones de errores y nuevas funcionalidades.


