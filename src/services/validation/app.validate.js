import joi from "joi"


const AppCreate = joi.object({
    _id: joi.string().required(),
    device: joi.array().allow(null)
})

export default {
    AppCreate
}