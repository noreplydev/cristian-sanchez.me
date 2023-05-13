---
title: "Session auth with Express"
slug: "session-auth-with-express"
topics: "Node.js & Express" 
banner: "/posts/session-auth-with-express/banner.webp"
date: "01-05-2023"
---

# Session auth with Express
There are two main ways to authenticate a user in a web application: session-based authentication and token-based authentication. In this article, we will focus on session-based authentication.

# What is session-based authentication?
Session-based authentication is a way to authenticate a user in a web application where the user's session is stored on the server, database or in any other way. On the client, the session is normally stored in a cookie. The cookie contains the session id and is sent to the server automatically in every request by the browser.

![Session-based authentication](/posts/session-auth-with-express/session-based-auth.png)

# Okay, but how do I implement it?
There are several ways to implement session-based authentication on a node/express server. In this case, we will use the [alive-sessions](https://www.npmjs.com/package/alive-sessions) package. It is a simple package that keeps track of our sessionsID in memory and triggers and action when the session expiration time is reached. This package doesn't store the session data, it only store the sessionID and manages the expiration time.  

So after know what package we will use, let's dive into the code. 

# Installing dependencies
First we need to initilize our project by creating a new folder called `session-auth` and runnning `npm init -y` inside it to generate our `package.json` file. Then we need to install our dependencies. 

```node
npm install express alive-sessions
```
 
And we need to install also nodemon as a dev dependency to restart our server automatically when we make changes to our code. 

```node
npm install -D nodemon
```

# Configure package.json
Let's configure our `package.json`, we will use Es Modules so we need to add the `"type": "module"` property to our `package.json` file. We also need to add a script to run our developer server with nodemon. 

```json
// package.json
{
  "name": "session-auth",
  "version": "1.0.0",
  "description": "",
  "type": "module", // added line
  "main": "index.js",
  "scripts": {
    "dev": "nodemon src/server.js" // added line
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "alive-sessions": "^1.0.5",
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^2.0.22"
  }
}
```

We can now run our server with `npm run dev` in the terminal, but we will get an error because we haven't created our `server.js` file yet. So let's do that now. 

# Creating our server
Let's create our `server.js` file inside a `src` folder. 

```javascript
// ./src/server.js

import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.listen(3000, () => {
  console.log('Server running on port http://localhost:3000')
})
```

Now if we run this file with `npm run dev` and go to `http://localhost:3000` we will see a hello world message in our browser.

# Project structure
So far so good. Our project structure should look like this: 

```bash
• session-auth

├─ package.json
└─ src
  └── server.js
```

# Declaring our routes
Let's declare our routes. We will have a `/login`, `/register` and a `/dashboard`. Let's create a `routes` folder inside `src`. 

```javascript
// terminal: inside session-auth folder

mkdir src/routes
cd src/routes
```

And let's create our `auth.js` file inside the `routes` folder. 

```javascript
// terminal: inside session-auth/src/routes

touch auth.js
```

Now we can declare our Router in the `auth.js` file. This router will handle all our authentication routes. 

```javascript
// ./src/routes/auth.js

import { Router } from 'express'

export const authRouter = Router()

authRouter.post('/login', (req, res) => {})
authRouter.post('/register', (req, res) => {})
```

We need to import our router in our `server.js` file and use it as a middleware. To use it as a middleware we need to specify the path where we want to use it and the controller. In this case, we will use the `/` path and the `authRouter` as a controller. 

```javascript
// ./src/server.js

...
import { authRouter } from './routes/auth.js' // added line

const app = express()

app.use('/', authRouter) // added line
app.get('/', (req, res) => {
  res.send('Hello world')
})
...
```