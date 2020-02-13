import mongoose, { Mongoose } from 'mongoose';

const Schema = mongoose.Schema;

export const TaskSchema = new Schema({
    name: {
      type: String,
      required: 'Enter a first name'
    },
    type: {
      type: String,
      required: 'Enter a last name'
    },
    startTime: {
      type: Date,
      default: Date.now
    },
    endTime: {
      type: Date,
      default: Date.now
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    }
});
