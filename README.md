Instrucciones ejecucion

1. sobre la raiz del backend ejecutar el comando:  node server.js des 
2. sobre la raiz del frontend ejecutar el comando: ionic server (Esto funcionara siempre y cuando se tengan
las versiones que se mencionan en la informacion del Frontend)

Información Backend

1. El backend esta desarrollado en NodeJs con Express 4.16.0
2. Para hacer deploy en desarrollo o producción ejecutar los siguientes comando en consola:
   -  node server.js des  (Para desarrollo)
   -  node server.js pro  (Para producción)
3. Se estructuro la aplicacion con Router, controllers, config, servicios. En este caso la 
  carpeta "servicios" es un json con la informacion de los hoteles ya que no se requeria consumo a 
  alguna base de datos aun
4. Se implemento CRUD para hoteles, todas funciones(GET,DELETE, PUT, POST) probadas y en funcionamiento
5. Solo el metodo de buscar por Id esta configurado para funcionar con Router y controllers


Información Frontend

1. Esta desarrollado con Ionic 3, Angular 3, npm 5.3.0
2. La aplicacion esta diseñada para funcionar responsivamente adecuandose a todos los tamaños de pc 
y celulares moviles
3. Tiene capa de persistencia de datos para seguir realizando consultas de hoteles y filtrado aun sin
conexión a internet
4. Si es necesario se puede compilar como aplicación movil para Android e Ios.
5. Esta estructurado correctamente para temas de escalabilidad
6. Para minificar, ofuscar , etc en entornos productivos ejecutar el siguiente comando en consola:
   - ionic cordova build browser --prod --release
   
   
Notas importantes:

los hoteles se consumen desde el backend, pero el tema de filtrado por nombre y estrellas se maneja directamente en el frontend, esto
para temas de rendimiento y eficiencia. Se desarrollaron metodo que garantizan la sostenibilidad de los datos. Llegado el caso
que no se requiere asi, y sea necesario que el filtro lo realice el Backend se puede hacer el ajuste rapidamente.


  


