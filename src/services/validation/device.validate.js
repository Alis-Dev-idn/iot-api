import joi from "joi";

const AddDeviceData = joi.object({
    name: joi.string().required(),
    data: joi.object().required()
});

export default AddDeviceData;