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

La API está diseñada para ser **escalable** y **flexible**, permitiendo futuras ampliaciones.