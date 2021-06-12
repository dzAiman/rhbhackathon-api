const mongoose = require('mongoose')
const Contract = require('../../models/contractModel')
const User = require('../../models/userModel')

mongoose 
 .connect('mongodb://localhost:27017/rhbhackathon', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,   })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));

const user = new User({
    username: "Ahmad",
    email: "ahmad@gmail.com"
})

const contractInit = [{
    title: "Clean Job Applicant Data",
    description: "We had a massive recruitment drive recently and the data received by the HR department is getting overwhelming. We need the job applications data cleaned to get the best candidate.",
    expRequired: "Beginner",
    teamNumber: "1",
    reward: "RM 100",
    contractManager: "Farhan SJ"
},{
    title: "Automate report generation",
    description: "We have a manual task that we need to do everyday and have it reported.",
    expRequired: "Intermediatte",
    teamNumber: "2",
    reward: "RM 300",
    contractManager: "Farhan SJ" 
}]

user.save()
    .then((data)=>{
    console.log('User seed created')
})

for(const contractData of contractInit ){
    const contract = new Contract(contractData)
    contract.save()
        .then((data)=>{
        console.log('Contract seed generated')
    })
}