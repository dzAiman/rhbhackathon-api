const mongoose = require('mongoose')

class Database {
	static connect() {
		return new Promise((resolve, reject) => {
			mongoose.connect('mongodb://localhost:27017/rhbhackathon', { useNewUrlParser: true, useUnifiedTopology: true })
			const db = mongoose.connection

			db.once('open', () => {
				resolve(db)
			})

			db.on('error',  (err) => {
				reject(err)
			})            
		})
	}
}

module.exports = Database