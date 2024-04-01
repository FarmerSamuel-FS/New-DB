const Leagues = require("../models/League");

const createLeague= async (req, res) =>{
    const {league} = req.body;
    try {
        const newLeague = await Leagues.create(league);
    console.log("data >>>", newLeague);
    res.status(200).json({sucess: true, message: `${req.method} - request to League endpoint`
});
    } catch (error) {{
        if (error.name="ValidationError") {
            console.error("Error Validating!", error);
            res.status(422).json(error);} 
            else {
                console.error(error);
                res.status(500).json(error);
                }
            }
        }
    };

const getAllLeagues = async (req, res) =>{
    try {
        const leagues =await Leagues.find();
    res.status(200).json({ data: leagues, sucess: true, message: `${req.method} - request to League endpoint`
});
} catch (error) {{
    if (error.name="ValidationError") {
        console.error("Error Validating!", error);
        res.status(422).json(error);} 
        else {
            console.error(error);
            res.status(500).json(error);
            }
        }
    }
};

const getLeagueByID = async (req, res)=>{
    try {
        const { id } = req.params;
    const leagues =await Leagues.findById(id, req.body);
    res.status(200).json({ data: leagues, sucess: true, message: `${req.method} - request to League endpoint`});
    } catch (error) {{
        if (error.name="ValidationError") {
            console.error("Error Validating!", error);
            res.status(422).json(error);} 
            else {
                console.error(error);
                res.status(500).json(error);
                }
            }
        }
    };

const updateLeague = async (req, res)=>{
    try {
        const { id } = req.params;
    const leagues = await Leagues.findByIdAndUpdate(id, req.body, {new: true});
    res.status(200).json({ data: leagues, success: true, message: `${req.method} - request to Fighter endpoint`,});
} catch (error) {{
    if (error.name="ValidationError") {
        console.error("Error Validating!", error);
        res.status(422).json(error);} 
        else {
            console.error(error);
            res.status(500).json(error);
            }
        }
    }
};

const deleteLeague = async (req, res)=>{
    try {
        const { id } = req.params;
    const leagues = await Leagues.findByIdAndDelete(id, req.body, {success: true});
    res.status(200).json({ data: leagues, sucess: true, message: `${req.method} - request to Fighter endpoint`});
} catch (error) {{
    if (error.name="ValidationError") {
        console.error("Error Validating!", error);
        res.status(422).json(error);} 
        else {
            console.error(error);
            res.status(500).json(error);
            }
        }
    }
};

module.exports = {
    createLeague,
    getAllLeagues,
    getLeagueByID,
    updateLeague,
    deleteLeague
}