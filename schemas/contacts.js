const Joi = require("joi");

// const phoneRegexp = /^\(\d{3}\) \d{3}-\d{4}$/;

const contactAddSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `missing required name field`,
    "string.empty": `missing required name field`,
  }),
  email: Joi.string().required().email().messages({
    "any.required": `missing required email field`,
    "string.empty": `missing required email field`,
  }),
  phone: Joi.string().required().messages({
    "any.required": `missing required phone field`,
    "string.empty": `missing required phone field`,
  }),
});

const contactUpdateSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  phone: Joi.string(),
})
  .min(1)
  .message("missing fields");

module.exports = {
  contactAddSchema,
  contactUpdateSchema,
};