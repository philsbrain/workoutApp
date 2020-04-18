const express = require('express'); //import express
const apiRouter = express.Router(); //create instance of express router and save it to variable
const weightsWorkoutRouter = require('./weightsworkout.js');

apiRouter.use('/weightWorkout', weightsWorkoutRouter);

module.exports = apiRouter; // export the router 