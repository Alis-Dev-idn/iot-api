import joi from "joi";

const AddDeviceData = joi.object({
    device: joi.string().required(),
    data: joi.object().required()
});

export default AddDeviceData;