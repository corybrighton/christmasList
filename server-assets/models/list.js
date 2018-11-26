let mongoose = require('mongoose')
let Schema = mongoose.Schema

let schema = new Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
  description: { type: String, required: true }
})

module.exports = mongoose.model("List", schema)