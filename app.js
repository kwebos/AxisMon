'use strict';
const port = process.env.PORT || 3000;

const db = require('./models/database');
const express = require('express');
var log4js = require('log4js');

log4js.clearAppenders();
log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file('logs/app.log'), 'app');


var logger = log4js.getLogger('app');
const app = express();


app.get('/',function(req, res){
	const knex = db.connect();
	logger.info("Connected to DB");
	knex.select().table('process').then(function(data){
			res.json(data);
			logger.info("Printing process table:")
			logger.info(data);
	}).then(function(){
		knex.destroy();
		logger.info("Connection to DB closed");
		console.log('Destroyed!');
	})
		
});

app.listen(port, function(){
	console.log('Server Running on port: ' + port);
});




