Welcome to Server-Side Programming 👋
The website and API were conceived as a news portal for Durham University.
API Documentation: https://ssp-news.stoplight.io/docs/ssp-news/reference/SSP-News-API.v1.yaml

Installation: npm install
Testing: npm run test

- The "work" folder contains the server side, an API written in nodejs.
Use "npm run start" to start the server.

The server where the API part is currently located: serverside-programming.herokuapp.com
Database: MongoDB Atlas (online database)

- The "durham_news" folder contains the client side (website).
To view it, open the index.html file in your browser.

1. If you want to launch a website and send requests to an online server, then go
in durham_news/js/variables.js and set "hostUrl" variable to the online server
with url : "serverside-programming.herokuapp.com".
In this case, you do not have to start the server from your own computer.

2. If you want to run the API server from your computer and make requests to it yourself,
then set hostUrl variable to "http://localhost:3000".