const express = require("express");
const router = express.Router();
const fRoutes = require("./fRoutes");
const legRoutes = require("./legRoutes");



router.get("/", (req, res) =>{
    res.status(200).json({ sucess: true, message: `${req.method} - Request made`});
});
router.use("/league", legRoutes);
router.use("/fighter", fRoutes);

module.exports = router;