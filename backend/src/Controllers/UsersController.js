//index, store, delet
const User = require('../Models/User');
const bcrypt = require('bcrypt');
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
        const { name } = req.body;
        let user = await User.findOne({ name });
        if(!user) return res.json({
            error: "User does not exist"
        })

        return res.json(user);
    },

    async store(req, res){
        const { error } = validation.userRegisterValidation(req.body);
        if(error) return res.json(error.details[0].message);

        const { name, email, password } = req.body;

        let user = await User.findOne({
            email
        })

        if(user) return res.json(`Email ${email} already exists`);

        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(password, salt);
        
        user = await User.create({
            name,
            email,
            password: hashPass 
        })

        return res.json(user);
    }
    
}