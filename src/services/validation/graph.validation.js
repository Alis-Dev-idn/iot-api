import joi from "joi";

const CreateGraph = joi.object({
    data: joi.string().min(4).required(),
    application: joi.string().min(4).required(),
    device: joi.string().min(4).required(),
    widget_type: joi.string().min(4).required()
});

export default {
    CreateGraph
};