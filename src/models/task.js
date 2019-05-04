const mongoose = require('mongoose'); //para modelar los datos
const { Schema } = mongoose; // (requiero solo el esquema desde mongoose) Schema permite definir el esquema de los datos

const TaskSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }
});



module.exports = mongoose.model('Task', TaskSchema);