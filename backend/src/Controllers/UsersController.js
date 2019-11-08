//index, store, delet
const User = require('../Models/User');
const validation = require('../validation');

module.exports = {

    async delete(req, res){

        const { _id } = req.params;
        let user = await User.findById(_id);
        if(user){
            const userName = user.name;
            await User.deleteOne({ _id: user._id });
            return res.json({ message: `User ${userName} was deleted` });
        }
        
        return res.status(400).json({
            error: "User does not exist"
        });
        
    },

    async index(req, res){
        
        try{   
            const { name } = req.body;
            let user = await User.findOne({ name });
            if(!user) return res.json({
                error: "User does not exist"
            })
    
            return res.json(user);
            
        } catch(e){
            return res.status(400).json({ error: e })
        }

    },

    async store(req, res){

        const { error } = validation.registerValidation(req.body);
        if(error) return res.json(error.details[0].message);

        try{
            const { name, email, password } = req.body;
                
                let user = await User.create({
                    name,
                    email,
                    password
                })

                return res.json(user);

        } catch(e){
            return res.status(400).json({ error: e });
        }
    }
    
}