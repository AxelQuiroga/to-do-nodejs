# Proyecto To-Do - Backend

API REST en Node.js + Express para manejo de usuarios y tareas con autenticacion JWT y base de datos PostgreSQL.

## Requisitos

- Node.js 18+ (recomendado)
- PostgreSQL

## Instalacion

```bash
npm install
```

## Variables de entorno

Crea un archivo `.env` en la raiz con:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=elpuerto
DB_USER=userdb
DB_PASSWORD=tu_password
DB_NAME=tudbnombre
JWT_SECRET=ejemplo
```

## Ejecutar

Produccion/desarrollo simple:

```bash
node server.js
```

Si queres usar nodemon, ajusta el script `dev` para que apunte a `server.js` y ejecuta:

```bash
npm run dev
```

## Endpoints

Auth:

- `POST /auth/register`  
  Body: `{ "email": "user@mail.com", "password": "123456" }`
- `POST /auth/login`  
  Body: `{ "email": "user@mail.com", "password": "123456" }`  
  Respuesta: `{ "token": "..." }`

Tasks (requiere `Authorization: Bearer <token>`):

- `GET /tasks`
- `POST /tasks`  
  Body: `{ "title": "Comprar pan" }`
- `PUT /tasks/:id`  
  Body: `{ "title": "Nuevo titulo", "completed": true }`
- `DELETE /tasks/:id`

## Esquema de base de datos (referencia)

Tablas requeridas:

- `users`: `id`, `email`, `password`
- `tasks`: `id`, `title`, `completed`, `user_id`

Sugerencia: `tasks.completed` con default `false`.
