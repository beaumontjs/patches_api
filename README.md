# Project Overview

This code base is designed to be a backend API for Beaumont JS to implement a badge system; this system will keep track of the different skills our members employ in creating our group's various projects.

## Architectural Overview

### OAuth
* OAuth (Open Authorization) is an open standard for token-based authentication and authorization on the Internet. This project implements this standard in order to keep track of our members' progress without having to store their sensitive information.
  * Referenced Articles which we based our implementation around:
    1. Scotch.io Article - discussing how to use the Grant middleware library for express and its peers: [Article Link](https://scotch.io/tutorials/implement-oauth-into-your-express-koa-or-hapi-applications-using-grant)
    2. Infosec institute article on how to create a Node JS API authenticated with OAuth 2: [Article Link](http://resources.infosecinstitute.com/securing-web-apis-part-ii-creating-an-api-authenticated-with-oauth-2-in-node-js/)
