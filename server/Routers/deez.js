const { Router } = require("express");
const Login = require("../models/Login");
const router = Router();

router.post("/login", (request, response) => {
    // The mongoose model assumes there is an open connection
    const newLogin = new Login(request.body);
    newLogin.save((error, record) => {
        console.log(error);
        if (error) return response.status(500).json(error);
        return response.json(record);
    });
});

router.get("/login", (request, response) => {
    Login.find({}, (error, record) => {
        if (error) return response.status(500).json(error);
        return response.json(record);
    });
});
  
module.exports = router;