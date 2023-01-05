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

const Login = mongoose.model("DeezNaughts", accountSchema);
module.exports = Login;