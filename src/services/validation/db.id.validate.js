import mongoose from "mongoose";

const DbValidate = (id) => {
    const idObject = mongoose.Types.ObjectId;
    if(idObject.isValid(id)){
        if((String)(new Object(id)) === id) return true;
        return false;
    }
    return false;
}

export default DbValidate;