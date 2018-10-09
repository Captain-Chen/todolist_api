'use strict';

var mongoose = require('mongoose'),
	Task = mongoose.model('Tasks');
	
exports.list_all_tasks = function(req, res){
	Task.find({}, (err, task) => {
		if(err){
			res.send(err); 
		}
		res.json(task);
	});
}

exports.create_a_task = function(req, res){
	var new_task = new Task(req.body);
	new_task.save((err, task) => {
		if(err){ 
			res.send(err); 
		}
		res.json(task);
	});
}

exports.read_a_task = function(req, res){
	Task.findById(req.params.taskId, (err, task) => {
		
	});
}