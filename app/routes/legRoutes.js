const router = require("express").Router();

const { createLeague,
    getAllLeagues,
    getLeagueByID,
    updateLeague,
    deleteLeague, }= require("../controller/leagueController");

router.get("/:id",getLeagueByID ); 
router.get("/", getAllLeagues );
router.post("/",createLeague );
router.put("/:id", updateLeague);
router.delete("/:id", deleteLeague);

module.exports = router
