---
title: "Session auth with Express"
slug: "session-auth-with-express"
topics: "Node.js & Express" 
banner: "/posts/session-auth-with-express/banner.png"
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

```bash
npm install express alive-sessions
```
 
And we need to install also nodemon as a dev dependency to restart our server automatically when we make changes to our code. 

```bash
npm install -D nodemon
```

# Comming soon...⌛ 