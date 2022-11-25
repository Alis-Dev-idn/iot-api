import joi from "joi"


const AppCreate = joi.object({
    application: joi.string().required(),
});

const AddDevice = joi.object({
    name: joi.string().min(5).required(),
    application: joi.string().required()
})

export default {
    AppCreate,
    AddDevice
}