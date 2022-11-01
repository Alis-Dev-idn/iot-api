

const SendSensorValue = async (req, res) => {
    console.log(req.body)
    return res.status(200).json({message: "Send Ok"});
}

module.exports = SendSensorValue;