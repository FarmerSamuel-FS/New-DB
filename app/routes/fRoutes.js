const router = require("express").Router();

const { createFighter,
    getAllFighters,
    getFighterByID,
    updateFighter,
    deleteFighter, }= require("../controller/fighterController");

router.get("/:id",getFighterByID ); 
router.get("/", getAllFighters );
router.post("/",createFighter );
router.put("/:id", updateFighter);
router.delete("/:id", deleteFighter);
 
module.exports = router
