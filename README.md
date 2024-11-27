## Descripción

La **Movie API** es una API RESTful que permite gestionar información sobre películas y sus respectivos autores (directores). Esta API facilita la creación, lectura, actualización y eliminación de películas, y permite asociar un director a cada película. <br/>

A través de esta API, los usuarios pueden interactuar con los siguientes recursos: <br/>

### Películas (Movies)
- **Crear una película**: Permite agregar una nueva película a la base de datos, especificando atributos como el título, la fecha de lanzamiento, el género, el tipo, el estado (activo o inactivo), el productor y el director asociado. <br/>
- **Obtener todas las películas**: Recupera una lista de todas las películas almacenadas en el sistema. Los usuarios pueden aplicar filtros, ordenamientos y paginación para obtener resultados más específicos. <br/>
- **Obtener una película por ID**: Permite consultar una película específica utilizando su identificador único (ID). <br/>
- **Actualizar una película**: Permite modificar los detalles de una película existente a través de su ID. <br/>
- **Eliminar una película**: Permite eliminar una película de la base de datos mediante su ID. <br/>

### Autores (Authors)
- **Crear un autor**: Permite agregar un nuevo autor (director) al sistema, con su nombre y detalles asociados. <br/>
- **Obtener todos los autores**: Recupera una lista de todos los autores disponibles en la base de datos. <br/>
- **Obtener un autor por ID**: Permite consultar un autor específico a través de su ID. <br/>
- **Actualizar un autor**: Permite modificar los detalles de un autor existente. <br/>
- **Eliminar un autor**: Permite eliminar un autor del sistema. <br/>

### Características
- **Paginación**: Los usuarios pueden limitar la cantidad de resultados obtenidos al hacer solicitudes a los endpoints de películas y autores mediante los parámetros `page` y `limit`. <br/>
- **Filtrado**: La API permite filtrar las películas por tipo y estado, y proporciona la opción de ordenar los resultados por diferentes criterios, como fecha de lanzamiento. <br/>
- **Base de datos**: La API está respaldada por una base de datos MySQL, y se utiliza Sequelize para interactuar con la base de datos de manera eficiente. <br/>

### Tecnologías
La API está construida utilizando las siguientes tecnologías: <br/>
- **Node.js**: Entorno de ejecución para JavaScript en el servidor. <br/>
- **Express.js**: Framework minimalista y flexible para construir aplicaciones web y APIs en Node.js. <br/>
- **Sequelize**: ORM (Object Relational Mapping) para interactuar con bases de datos SQL, en este caso, MySQL. <br/>
- **MySQL**: Sistema de gestión de bases de datos relacional para almacenar la información de las películas y autores. <br/>

La API está diseñada para ser flexible y escalable, permitiendo que se agreguen nuevas funcionalidades o se integren con otros sistemas según las necesidades del proyecto. <br/>
