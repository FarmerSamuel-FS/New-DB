const Fighters = require("../models/Fighters");

const createFighter= async (req, res) =>{
    const {fighter} = req.body;
    try {
        const newFighter = await Fighters.create(fighter);
    console.log("data >>>", newFighter);
    res.status(200).json({sucess: true, message: `${req.method} - request to Fighter endpoint`
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

const getAllFighters = async (req, res) =>{
    try {
        const fighters =await Fighters.find();
    res.status(200).json({ data: fighters, sucess: true, message: `${req.method} - request to Fighter endpoint`
});
    } catch (error) {
        console.log(error);
    }
    };

const getFighterByID = async (req, res)=>{
    try {
        const { id } = req.params;
    const fighters =await Fighters.findById(id, req.body);
    res.status(200).json({ data: fighters, sucess: true, message: `${req.method} - request to Fighter endpoint`});
    } catch (error) {
        console.log(error);
    }
    
};

const updateFighter = async (req, res)=>{
    try {
        const { id } = req.params;
    const fighters = await Fighters.findByIdAndUpdate(id, req.body, {new: true});
    res.status(200).json({ data: fighters, success: true, message: `${req.method} - request to Fighter endpoint`,});
    } catch (error) {
        console.log(error);
    } 
};
const deleteFighter = async (req, res)=>{
    try {
        const { id } = req.params;
    const fighters = await Fighters.findByIdAndDelete(id, req.body, {success: true});
    res.status(200).json({ data: fighters, sucess: true, message: `${req.method} - request to Fighter endpoint`});
    } catch (error) {
        console.log(error);
    }  
};
module.exports = {
    createFighter,
    getAllFighters,
    getFighterByID,
    updateFighter,
    deleteFighter
}