import mongoose from 'mongoose';
import gradesModels from './gradesModels.js'

// require('dotenv').config();

const db = {};
db.mongoose = mongoose;
db.grades = gradesModels(mongoose);

// console.log(db)
export { db };
