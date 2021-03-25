
Menu
1
Q
1
const express = require("express");
2
const app = express();
3
​
4
const users = require("./data/users-data");
5
const states = require("./data/states-data");
6
​
7
// TODO: return an array of users from /users in form of { data: Array }
8
​
9
// TODO: return a single user by id from /users/:userId in form of { data: Object }
10
​
11
// TODO: return all states from /states in the form of { data: Array }
12
​
13
// TODO: Return a single state from /states/:stateCode in the form of { data: { stateCode: String, name: String } }
14
​
15
// TODO: add not found handler
16
​
17
// TODO: Add error handler
18
​
19
module.exports = app;
20
​
Robust Server Structure: Static data practice
Your task is to build an API server for users and states. It should handle the following routes:

/users returns an array of users in the form { data: Array }
/users/:userId returns a single user by id in form { data: {} } or User ID not found: ${userId} if the user does not exist.
/states returns the states data in the form { data: Array }.
/states/:stateCode returns the states data in the form { data: { stateCode: String, name: String } } or State code not found: ${stateCode} if the state code does not exist.
Any other path returns: Not found: ${req.originalUrl}
Use the existing data files located in src/data for the responses. Feel free to add or remove data from the files as necessary, but keep the same shape of the data.

