# Hirejob_API

<!-- ABOUT THE PROJECT -->

## About The Project

This is a Restful API repository for Nibiru Chat. This Restful API is built using ExpressJS and PostgreSQL.

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


<!-- RELATED PROJECT -->

## Related Project

- [Telegram Chat API](https://github.com/sukron21/week_10_hirejob_App)
- [Telegram Chat App](https://github.com/sukron21/Hirejob_API)

## Authors

Contributors names and contact info:

1. Rahmat Furqon

- [Linkedin](www.linkedin.com/in/furqon-rahmat)
