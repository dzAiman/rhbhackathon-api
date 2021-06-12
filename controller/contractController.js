const Contract = require('../models/contractModel')

async function getContract(req, res){
    try {		
		const contract = await Contract.find({})
		return res.send(contract)
	}	
	catch (err) {
		return res.status(403).send({ error: err.message })
	}
}

async function addContract (req, res){
    console.log('hello world')
    const { title, description, expRequired, teamNumber, reward, contractManager } = req.body
    const contract = new Contract()
    contract.title = title
    contract.description = description
    contract.expRequired = expRequired
    contract.teamNumber = teamNumber
    contract.reward = reward
    contract.contractManager = contractManager

    try{
        contract.save()
    }
    catch(e){
        console.log(e)
    }
    return res.json({
        title: contract.title,
        description: contract.description,
        expRequired: contract.expRequired,
        teamNumber: contract.teamNumber,
        reward: contract.reward,
        contractManager: contract.contractManager,
    })
}

async function editContract(req, res){
    
}

module.exports.getContract = getContract
module.exports.addContract = addContract
