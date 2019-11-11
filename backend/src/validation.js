const Joi = require('@hapi/joi');


module.exports = {

    userRegisterValidation(data){
        const schema = Joi.object({
            name: Joi.string().min(2).required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required()
        })
    
        return schema.validate(data);
    },

    matchRegisterValidation(data){
        const schema = Joi.object({
            name: Joi.string().min(3).required(),
            day: Joi.string().required(),
            hour: Joi.string().required()
        })

        return schema.validate(data);
    },

    playerRegisterValidation(data){
        const schema = Joi.object({
            name: Joi.string().min(2).required()
        })

        return schema.validate(data);
    }

}


