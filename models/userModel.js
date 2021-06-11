const mongoose = require('mongoose')

const schema = mongoose.Schema({
    username: {
		type: String, 
		required: true, 
		unique: true
	},
	email: {
		type: String,
		default: ''
	},
})

module.exports = mongoose.model('User', schema)