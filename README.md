# Hirejob_API

<!-- ABOUT THE PROJECT -->

## About The Project

Hirejob is a website application that collects information from two types of users, the first type is the recruiter and the second type is the worker. Employees can display their portfolio and work experience, while recruiters can search for the required worker criteria. This website is built with JavaScript Technology, NodeJS, and its libraries (Express, NextJS), HTML 5, and CSS. For the Backend, I use ExpressJS and NodeJS as the main Technology, for the Frontend I use Next JS a library in the ReactJS library.

### Technology Used

- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [JWT](https://jwt.io/)
- [Google APIs](https://github.com/googleapis/google-api-nodejs-client)
- [Nodemailer](https://nodemailer.com/about/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)



## Getting Started
### Structure Folder 

<p id='structure-folder'>Backend</p>
<ul>
  <li>public || <span><b><i>Folder for save user image in local storage</i></b></span></li>
  <li>src</li>
  <ul>
  <li>config ||<span><b><i>Folder for database setting to connect with backend.</i></b></span></li>
    <li>controller ||<span><b><i>You can store various needs for this website, such as images, styles, javascript, and others.</i></b></span></li>
    <li>helper ||<span><b><i>This folder to help the user such as for example response.</i></b></span></li>
    <li>Middlware ||<span><b><i>This folder is to help users deal with things related to jwtauth cloudinary and multer.</i></b></span></li>
    <li>model ||<span><b><i>In this folder we use a query so that user input enters the database.</i></b></span></li>
    <li>router ||<span><b><i>The router is used to set the endpoint of this application.</i></b></span></li>
  </ul>
</ul>
<hr/>

### Package
- bcrypt
- body-parser
- cors
- dotenv
- express
- helmet
- jsonwebtoken
- multer
- nodemon
- pg
- xss-clean

### Installation

<li>- Clone this project with `git clone https://github.com/sukron21/Hirejob_API`</li>
<li>- Install package required with `npm install`</li>
<li>Setting .env</li>

```bash

# database
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
DB_PORT=

# jwt
JWT_SECRET=

```
<li>Continue with database creation.</li>
  <li>You can first import the postman documentation contained in this repo and pay attention to the fields in each POST request.
</li>
  <li>To run the server that has been set, use the <b>npm run dev command</b>.</li>
  <li>When there is a description of the Server running on Port (with the port you have specified), the API is ready to use.</li>
</ol>
<hr />

### Executing program

- Run program with `npm run dev` for development and `npm run start` for production

## Endpoint List
### /user

- GET | `/user`
  - Body: None
  -  - limit (number | default 3)
    - page (number | default 1)
    -asc (asc | asc)
    -sort (sort | username)
  - Desc: Get a list of users ascending with username  in the database
- GET | `/user/:id`
  - Body: None
  - Token: Required
  - Desc: Get detailed user data based on the entered id
- PUT | `/user/:id
  - Body:
    - username (required | alphabet | max 50)
    - phone (required | number | max 13)
  - Desc: Update user data based on entered id
  - POST | `/register`
  - Body:
    - username (required)
    - email (required | valid email)
    - password (required)
    -phone (required)
  - Desc: register
- POST | `/login`
  - Body:
    - email (required | valid email)
    - password (required)
  - Token: Not required
  - Desc: Login
  
- DELETE | `/user/:id`
  - Body: None
  - Desc: Delete user data based on the entered id

### /perusahaan

- GET | `/perusahaan`
  - Body: None
  -  - limit (number | default 3)
    - page (number | default 1)
    -asc (asc | asc)
    -sort (sort | username)
  - Desc: Get a list of users ascending with username  in the database
- GET | `/perusahaan/:id`
  - Body: None
  - Token: Required
  - Desc: Get detailed user data based on the entered id
- PUT | `/perusahaan/:id
  - Body:
    - username (required | alphabet | max 50)
    - phone (required | number | max 13)
  - Desc: Update user data based on entered id
  - POST | `/perusahaan/register`
  - Body:
    - username (required)
    - email (required | valid email)
    - password (required)
    -phone (required)
  - Desc: register
- POST | `/perusahaan/login`
  - Body:
    - email (required | valid email)
    - password (required)
  - Token: Not required
  - Desc: Login
  
- DELETE | `/perusahaan/:id`
  - Body: None
  - Desc: Delete user data based on the entered id
  


<!-- RELATED PROJECT -->

## Related Project

- [Telegram Chat API](https://github.com/sukron21/week_10_hirejob_App)
- [Telegram Chat App](https://github.com/sukron21/Hirejob_API)

## Authors

Contributors names and contact info:

1. Rahmat Furqon

- [Linkedin](www.linkedin.com/in/furqon-rahmat)
