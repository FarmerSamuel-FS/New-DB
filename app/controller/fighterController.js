const createFighter= (req, res) =>{
    res.status(200).json({sucess: true, message: `${req.method} - request to Fighter endpoint`});
};

const getAllFighters = (req, res) =>{
    res.status(200).json({sucess: true, message: `${req.method} - request to Fighter endpoint`});
};
const getFighterByID = (req, res)=>{
    const { id } = req.params;
    res.status(200).json({ id, success: true, message: `${req.method} - request to Fighter endpoint`,});
};

const updateFighter = (req, res)=>{
    const { id } = req.params;
    res.status(200).json({ id, success: true, message: `${req.method} - request to Fighter endpoint`,});
};
const deleteFighter = (req, res)=>{
    const { id } = req.params;
    res.status(200).json({ id, success: true, message: `${req.method} - request to Fighter endpoint`,});
};
module.exports = {
    createFighter,
    getAllFighters,
    getFighterByID,
    updateFighter,
    deleteFighter
}