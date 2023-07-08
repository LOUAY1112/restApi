let mongoose =require("mongoose")

const person = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number },
    Email: [{ type: String }],
});
const personneModel = mongoose.model("person", person);
module.exports = personneModel;
