const Buletin = require('../models/buletinModel')

async function getBuletin(req, res){
    try {		
		const buletin = await Buletin.find({})
		return res.send(buletin)
	}	
	catch (err) {
		return res.status(403).send({ error: err.message })
	}
}

// async function addContract (req, res){
//     console.log('hello world')
//     const { title, description, expRequired, teamNumber, reward, contractManager } = req.body
//     const contract = new Contract()
//     contract.title = title
//     contract.description = description
//     contract.expRequired = expRequired
//     contract.teamNumber = teamNumber
//     contract.reward = reward
//     contract.contractManager = contractManager

//     try{
//         contract.save()
//     }
//     catch(e){
//         console.log(e)
//     }
//     return res.json({
//         title: contract.title,
//         description: contract.description,
//         expRequired: contract.expRequired,
//         teamNumber: contract.teamNumber,
//         reward: contract.reward,
//         contractManager: contract.contractManager,
//     })
// }


module.exports.getBuletin = getBuletin
