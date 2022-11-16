import joi from "joi"


const AppCreate = joi.object({
    application: joi.string().required(),
});

const AddDevice = joi.object({
    device: joi.string().required(),
})

export default {
    AppCreate,
    AddDevice
}