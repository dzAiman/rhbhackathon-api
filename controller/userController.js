const User = require('../models/userModel')

async function addUser(req, res) {
    console.log('hello world')
    return res.send('yo its working')
}

module.exports.addUser = addUser