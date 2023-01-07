const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        validate: /^[A-Za-z ]*$/,
    },
    password: {
        type: String,
        required: true,
        validate: /^[A-Za-z ]*$/,
    }
});

const CreateAcc = mongoose.model("OmokAccount", accountSchema);
module.exports = CreateAcc;