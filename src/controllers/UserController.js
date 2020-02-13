import mongoose from 'mongoose';
import { UserSchema } from '../models/userModel';
const User = mongoose.model('User', UserSchema);
import { createToken } from './helper';

export const addNewUser = (req, res) => {
  let newUser = new User(req.body);
  console.log(newUser);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  User.findOne({
    email: req.body.email
  }, function(err, existingUser) {
    if(existingUser)
      return res.status(500).send({message: 'Email Already registered'});
    newUser.save((err, user) => {
      if (err) {
        console.log('here');
        res.status(500).send(err);
      }
      res.status(200).json(createToken(user));
    });
  })
}
export const getUser = (req, res) => {
  User.findById(req.params.userId,(err, user) => {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
}
export const login = (req, res) => {
  User.findOne({
    email: req.body.email
  }, function(err, user) {
    if(!user)
      return res.status(500).send({message: 'Email or password Invalid'});
    if(req.body.password == user.password) {
      res.send(createToken(user))
    } else {
      return res.status(401).send({
        message: 'Email or password Invalid'
      })
    }
  })
}
