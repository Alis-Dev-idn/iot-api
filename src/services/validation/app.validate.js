import joi from "joi"


const AppCreate = joi.object({
    application: joi.string().required()
})

export default {
    AppCreate
}