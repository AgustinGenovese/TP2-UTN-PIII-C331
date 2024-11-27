# Movie API
La **Movie API** es una API RESTful para gestionar información sobre **películas** y sus **directores**. Permite realizar las siguientes operaciones:

## **Películas:**
- **Crear:** Agregar una nueva película a la base de datos.  
- **Obtener:** Recuperar todas las películas o una específica por **ID**.  
- **Actualizar:** Modificar los detalles de una película existente.  
- **Eliminar:** Borrar una película de la base de datos.  
- **Filtrar:** Buscar películas por tipo y estado.  
- **Ordenar:** Organizar los resultados por fecha de lanzamiento u otros criterios.  
- **Paginación:** Limitar los resultados con parámetros **page** y **limit**.

## **Autores (Directores):**
- **Crear:** Agregar un nuevo director al sistema.  
- **Obtener:** Recuperar todos los autores o uno específico por **ID**.  
- **Actualizar:** Modificar los detalles de un autor existente.  
- **Eliminar:** Borrar un autor del sistema.

## **Características:**
- **Paginación** y **filtrado** de resultados.  
- Utiliza una base de datos **MySQL** con **Sequelize** como ORM.  

## **Tecnologías:**
- **Node.js**  
- **Express.js**  
- **Sequelize**  
- **MySQL**


# Instrucciones para correr la API localmente

# **Requisitos previos:**
**1.** Tener Node.js instalado. Si no lo tienes, puedes descargarlo desde https://nodejs.org/
**2.**Tener MySQL instalado y configurado en tu máquina.

# **Pasos para ejecutar el proyecto:**

**1.** Clonar el repositorio del proyecto:

**2.** Instalar las dependencias del proyecto:
   Ejecuta el siguiente comando para instalar todas las dependencias necesarias:
   npm install

**3.** Configurar la base de datos:
   Asegúrate de que MySQL esté corriendo en tu máquina local.
   Crea una base de datos llamada peliculasdb en tu servidor MySQL.

**5.** Configurar el archivo database.js:
   Abre el archivo data/database.js y asegúrate de que las credenciales de conexión a la base de datos (usuario, contraseña y nombre de la base de datos) sean correctas. <br>
   
   Ejemplo:
   const db = new Sequelize("peliculasdb", "root", "", {
       host: 'localhost',
       dialect: 'mysql',
       port: 3306
   });

**7.** Ejecutar la aplicación:
   Esto debería iniciar el servidor en el puerto 3000. En la terminal deberías ver algo como:
   "listening on port 3000"
   
**8.** Acceder a la documentación de la API:
   Una vez que el servidor esté corriendo, abre tu navegador web y accede a la siguiente URL para ver la documentación Swagger de la API:
   http://localhost:3000/api-docs

**9.** Probar los endpoints de la API:
   Desde la documentación Swagger, podrás probar los diferentes endpoints de la API, como los de películas y autores.

# **Notas:**
**-** Si encuentras algún error con la conexión a la base de datos, revisa las credenciales y asegúrate de que MySQL esté funcionando correctamente en tu máquina.
**-** La API permite realizar operaciones CRUD sobre las películas y los autores (crear, leer, actualizar y eliminar).