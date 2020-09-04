// import mongoose from "mongoose";
export default (mongoose) => {
  const gradesSchema = mongoose.Schema({
    name: {
      type: Number,
      require: true
    },
    subject: {
      type: Number,
      require: true
    },
    name: {
      type: String,
      require: true
    },
    lastModified: {
      type: Date,
      default: Date.now,
    }
  });
  
  const gradesModels = mongoose.model('grades', gradesSchema, );
  
  return gradesModels;
  }