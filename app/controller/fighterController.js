const Fighters = require("../models/Fighters");

const createFighter = async (req, res) => {
    const { fighter } = req.body;
    try {
        const newFighter = await Fighters.create(fighter);
        console.log("data >>>", newFighter);
        // Return the created fighter object with its _id property in the response
        res.status(200).json({ data: newFighter, success: true, message: `${req.method} - request to Fighter endpoint` });
    } catch (error) {
        if (error.name === "ValidationError") {
            console.error("Error Validating!", error);
            res.status(422).json(error);
        } else {
            console.error(error);
            res.status(500).json(error);
        }
    }
};


const getAllFighters = async (req, res) => {
    try {
        console.log(">>>", req.query);
        let query = Fighters.find();
        if (req.query) {
            const queryObject = { ...req.query };
            const excludedFields = ['page', 'limit', 'sort', 'select'];
            excludedFields.forEach(el => delete queryObject[el]);

            const queryString = JSON.stringify(queryObject)
                .replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`);
            query = query.find(JSON.parse(queryString));
        }
        if (req.query.select) {
            const fields = req.query.select.split(",").join(" ");
            query = query.select(fields);
        }
        if (req.query.sort) {
            const sortBy = req.query.sort.split(",").join(" ");
            query = query.sort(sortBy);
        }
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;
        const skip = (page - 1) * limit;
        query = query.skip(skip).limit(limit);
        const fighters = await query;

        res.status(200).json({ data: fighters, success: true, message: `${req.method} - request to Fighter endpoint` });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};


const getFighterByID = async (req, res) => {
    try {
        const { id } = req.params;
        const fighter = await Fighters.findById(id);
        if (!fighter) {
            return res.status(404).json({ success: false, message: "Fighter not found" });
        }
        res.status(200).json({ data: fighter, success: true, message: `${req.method} - request to Fighter endpoint` });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const updateFighter = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, age, league, description } = req.body.fighter;

        const updatedFighter = await Fighters.findByIdAndUpdate(id, { name, age, league, description }, { new: true });
        if (!updatedFighter) {
            return res.status(404).json({ success: false, message: "Fighter not found" });
        }
        return res.status(200).json({ data: updatedFighter, success: true, message: `${req.method} - request to Fighter endpoint` });
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};





const deleteFighter = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedFighter = await Fighters.findByIdAndDelete(id);
        if (!deletedFighter) {
            return res.status(404).json({ success: false, message: "Fighter not found" });
        }
        // Respond with an empty body for successful deletion
        res.status(200).send();
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};
{timestamps: true};


module.exports = {
    createFighter,
    getAllFighters,
    getFighterByID,
    updateFighter,
    deleteFighter
};
