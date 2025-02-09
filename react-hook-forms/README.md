# Exercise react hook forms 📝

En este ejercicio tendrás que crear una aplicación en React que contenga un formulario para la creacion de posts. 

Esta aplicación va a tener varias paginas páginas:
- El index `/` 
- La pagina de listado de posts `/posts`
- La pagina de creación de posts `/create-post`
- La pagina de detalle de un post `/post/:postId`

Las librerias que vamos a usar son:
- `react-router` para la navegación
- `react-hook-form` para el manejo de formularios
- `@tanstack/react-query` para el manejo de peticiones a la api
- `json-server` para simular una api rest
- La libreria de estilos que prefieras

## Requisitos

### General
- Debera contener un navbar comun a todas las paginas con enlaces a las paginas de listado de posts `/posts` y creación de posts `/create-post`

### Index `/`
- Deberá tener una introducción a la aplicación y una breve descripción de lo que se puede hacer

### Pagina de listado de posts `/posts`
- Deberá mostrar un listado de posts
- Cada post deberá tener un enlace a la pagina de detalle de un post `/post/:postId`

### Pagina de detalle de un post `/post/:postId`
- Deberá mostrar el detalle de un post
- Deberá tener un enlace para volver a la pagina de listado de posts `/posts`

### Pagina de creación de posts `/create-post`
- Deberá tener un formulario para la creación de posts
- El formulario deberá tener los siguientes campos:
  - `title` (campo de texto)
  - `author` (campo de texto)
  - `email` (campo de texto)
  - `body` (campo de texto)

Todos los campos son requeridos y deberán tener un mensaje de error si no se completan.

### API
- Deberás crear un archivo `db.json` con la siguiente estructura:
```json
{
  "posts": []
}
```
- Deberás correr el comando `json-server --watch db.json` para simular una api rest

### Extra
- Puedes añadir validaciones extra a los campos del formulario (por ejemplo que el email sea un email valido)
