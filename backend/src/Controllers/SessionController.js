const User = require('../Models/User');
const validation = require('../validation');
const bcrypt = require('bcrypt');

module.exports = {
    async store(req, res){
        const { error } = validation.userLoginValidation(req.body);
        if(error) return res.json(error.details[0].message);

        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if(!user) return res.status(400).json("Email not found");

        const validPass = await bcrypt.compare(password, user.password);
        if(!validPass) return res.status(400).json("Incorrect password");

        return res.json({
            user,
            login: "Logged in!"
        });

    },

    
}