import mongoose from 'mongoose';
import { TaskSchema } from '../models/taskModels';
const Task = mongoose.model('Task', TaskSchema);

export const addNewTask = (req, res) => {
  console.log('user is ------->');
  console.log(req.userId);
  req.body.user = req.user;
  console.log(req.body);
  let newTask = new Task(req.body);
  newTask.save((err, task) => {
    if (err) {
      res.send(err);
    }
    console.log(task);
    //console.log(req.body.userId);
    //console.log(responseWithId);
    res.json(task);
  });
}
export const getTasks = (req, res) => {
  console.log('in get task');
  Task.find({}).populate('User').exec(function(err, task){
    if (err) {
        res.send(err);
    }
    res.json(task);
  });
}
export const getTasksOfUser = (req, res) => {
  console.log('in get task');
  console.log(req.user);
  Task.find({user: req.user},(err, task) => {
    console.log(task);
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
}
