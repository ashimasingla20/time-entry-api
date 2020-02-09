import mongoose from 'mongoose';
import { TaskSchema } from '../models/crmModels';
const Task = mongoose.model('Task', TaskSchema);

export const addNewTask = (req, res) => {
  let newTask = new Task(req.body);

  newTask.save((err, task) => {
    if (err) {
        res.send(err);
    }
    res.json(task);
  });
}
export const getTasks = (req, res) => {
  Task.find({},(err, task) => {
    if (err) {
        res.send(err);
    }
    res.json(task);
  });
}
