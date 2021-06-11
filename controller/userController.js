const User = require('../models/userModel')

async function addUser(req, res) {

    const { username, email } = req.body
    const user = new User()
    user.username = username
    user.email = email

    try{
        user.save()
    }
    catch(e){
        console.log(e)
    }
    return res.json({
        username: user.username,
        email: user.email
    })
}

module.exports.addUser = addUser