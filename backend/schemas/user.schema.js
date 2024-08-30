const Joi = require('joi');

const createUserSchema = Joi.object({
    body: Joi.object({
        username: Joi.string().required(),
        password: Joi.string().min(6).required(),
        confirmPassword: Joi.string().valid(Joi.required('password')).required()
    })
});

