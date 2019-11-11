const Player = require('../Models/Player');
const validation = require('../validation');

module.exports = {

    async store(req, res){
        const { error } = validation.playerRegisterValidation(req.body);
        if(error) return res.json(error.details[0].message);

        const { name } = req.body;
        let arrNames = name.split(',').map(player => player.trim());
        

        arrNames.map( async (playerName) => {
            let player = await Player.findOne({ name: playerName });
            if(!player){
                player = await Player.create({
                    name: playerName
                })
            }
        })
        
        const players = await Player.find();
        return res.json(players);
    },

    async index(req, res){
        const players = await Player.find();
        return res.json(players);
    },

    async delete(req, res){
        const players = await Player.deleteMany();
        return res.json(players);
    }

}
