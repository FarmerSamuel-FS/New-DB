const express = require("express");
const router = express.Router();
const fRoutes = require("./fRoutes");

router.get("/", (req, res) =>{
    res.status(200).json({ sucess: true, message: `${req.method} - Request made`});
});

router.use("/fighter", fRoutes);

module.exports = router;