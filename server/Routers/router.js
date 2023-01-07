const { Router } = require("express");
const CreateAcc = require("../models/CreateAcc");
const router = Router();

router.post("/CreateAcc", (request, response) => {
    const newCreateAcc = new CreateAcc(request.body);

    newCreateAcc.save((error, record) => {
        try {
            console.log(`Username: ${record.username};`, `Password: ${record.password}`);
        } catch {
            console.log(error);
            if (error) return response.status(500).json(error);
            return response.json(record);
        }
        // console.log(record);
        // console.log(error);
        // if (error) return response.status(500).json(error);
        // return response.json(record);
    });
});

router.get("/CreateAcc", (request, response) => {
    CreateAcc.find({}, (error, record) => {
        if (error) return response.status(500).json(error);
        return response.json(record);
    });
});
  
module.exports = router;