const User = require('../models/userModel')

async function addUser(req, res) {

    const { firstName, lastName, email, workingStatus, yearsOfExperiece, qualification } = req.body
    const user = new User()
    user.firstName = firstName
    user.lastName = lastName
    user.email = email
    user.workingStatus = workingStatus
    user.yearsOfExperiece = yearsOfExperiece
    user.qualification = qualification

    try{
        user.save()
    }
    catch(e){
        console.log(e)
    }
    return res.json(user)
}

module.exports.addUser = addUser