const Match = require('../Models/Match');
const Player = require('../Models/Player');
const User = require('../Models/User');
const validation = require('../validation');

module.exports = {

    async update(req, res){ 
        const { players_array } = req.body;
        const { match_id } = req.params;

        let match = await Match.findById(match_id);

        let copied_arr = match.players.slice();

        for(let i = 0; i < players_array.length; i++){
            let player = await Player.findOne({ name: players_array[i] });
            if(player){
               copied_arr.push(player);
            }
        }

        match = await Match.updateOne({
            players: copied_arr
        })

        return res.json(match);
    },  

    async store(req, res){
        const { error } = validation.matchRegisterValidation(req.body);
        if(error) return res.json(error.details[0].message);

        const { name, day, hour } = req.body;
        let match = await Match.findOne({ name: name });

        if(match) return res.json({ erro: `Match ${name} already exists` });
                    
        match = await Match.create({
            name,
            day,
            hour
        });

        return res.json(match);
       
    },

    async index(req, res){
        const { match_id } = req.params;

        let match = await Match.findById(match_id);
        return res.json(match);
    },

}