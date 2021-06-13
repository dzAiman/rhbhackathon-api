const mongoose = require('mongoose')

const schema = mongoose.Schema({
    title: {
		type: String, 
		required: true, 
		unique: true
	},
	description: {
		type: String,
		default: ''
	},
    manager: {
		type: String,
		default: ''
	},
	createdDate: {
		type: String,
		default: ''
	},
	department: {
		type: String,
	}
})

module.exports = mongoose.model('Buletin', schema)