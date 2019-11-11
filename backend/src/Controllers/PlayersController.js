const Player = require('../Models/Player');
const validation = require('../validation');

module.exports = {

    async store(req, res){
        const { error } = validation.playerRegisterValidation(req.body);
        if(error) return res.json(error.details[0].message);

        const { name } = req.body;
        let arr_names = name.split(',').map(player => player.trim());

        arr_names.map( async (player_name) => {
            let player = await Player.findOne({ name: player_name });
            if(!player){
                player = await Player.create({
                    name: player_name
                })
            }
        }) 
        
        const players = await Player.find()
        return res.json(players);
    },

    async index(req, res){
        const players = await Player.find();
        return res.json(players);
    }

}
