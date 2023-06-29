# LOGIN SOLID

## Cristhian Vargas Quiroz

## Get Started

```
Al iniciar el proyecto se creara las tablas en una base de datos postgresql
La base de datos ya debe estar creada con el sgte scritp:

CREATE DATABASE logger
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;

```


```script
npm run start:dev
```

```
Hacer un insert para un usuario generico para la aplicacion con el sgte script:

INSERT INTO public."user"(
	id, username, password, email, gender, age)
	VALUES ('cristhian', '123456', '12345@gmail.com', 'M', '25');

```

## API

http://localhost:3000

Los endpoints disponibles son:

- POST `/log/login`
- POST `/log/register`
- POST `/log/method-encrypt-and-logger`

### /log/login

```json
{
  "username": "cristhian",
  "password": "123456",
  "email": "12345@gmail.com",
  "friendlyPhrase": "Hola"
}
```

### /log/register

```json
{
  "username": "cristhian",
  "password": "123456",
  "email": "1234@gmail.com",
  "gender": "M",
  "age": "18"
}
```

### /log/method-encrypt-and-logger

```
typeEncrypt:
"1": encriptacion por Bcrypt
"2": encriptacion por Arg2
"3": encriptacion sha512
```

```
typeLog:
"DB": logger en base de datos
"LOG": logger en consola y archivos
"ENDPOINT": logger enviando al end point externo
```

```json
{
  "typeEncrypt": "1",
  "typeLog": "LOG",
  "email": "12345@gmail.com",
  "password": "123456"
}
```
