//index, store, delet
const User = require('../Models/User');
const validation = require('../validation');

module.exports = {

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
            res.status(400).json({ error: e });
        }
    }
    
}