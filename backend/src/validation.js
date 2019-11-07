const Joi = require('@hapi/joi');


module.exports = {

    registerValidation(data){
        const schema = Joi.object({
            name: Joi.string().min(2).required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required()
        })
    
        return schema.validate(data);
    },

}


