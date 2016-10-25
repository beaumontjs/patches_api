# Project Overview

This code base is designed to be a backend API for Beaumont JS to implement a badge system; this system will keep track of the different skills our members employ in creating our group's various projects.

## Architectural Overview

### 1. OAuth
* __Overview and goals__ for this architecture / library

 _OAuth (Open Authorization)_ is an open standard for token-based authentication and authorization on the Internet. This project implements this standard in order to provide our members' with login functionality without having to store any of their sensitive information.

* __Reference Articles__ which we based our implementation around:
  1. Grant GitHub Library - OAuth Middleware utility for use with Express JS and its peers: [GitHub Link](https://github.com/simov/grant)
  2. Infosec institute Article - how to create a Node JS API authenticated with OAuth 2: [Article Link](http://resources.infosecinstitute.com/securing-web-apis-part-ii-creating-an-api-authenticated-with-oauth-2-in-node-js/)
  3. Stormpath Article - the difficulty in Authentication in Express JS: [Article Link](https://stormpath.com/blog/the-problem-with-api-authentication-in-express)
