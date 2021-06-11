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
    expRequired: {
		type: String,
		default: ''
	},
    teamNumber: {
		type: String,
		default: ''
	},
    reward: {
		type: String,
		default: ''
	},
    contractManager: {
		type: String,
		default: ''
	},
})

module.exports = mongoose.model('Contract', schema)