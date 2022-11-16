import joi from "joi"


const AppCreate = joi.object({
    application: joi.string().required(),
});

const AddDevice = joi.object({
    name: joi.string().required(),
    application: joi.string().required()
})

export default {
    AppCreate,
    AddDevice
}