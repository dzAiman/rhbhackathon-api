const mongoose = require('mongoose')

const schema = mongoose.Schema({
    firstName: {
		type: String, 
		required: true, 
	},
	lastName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	workingStatus: {
		type: Boolean,
	},
	yearsOfExperiece: {
		type: Number
	},
	qualification: {
		type: String
	}
})

module.exports = mongoose.model('User', schema)