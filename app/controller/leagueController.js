const Leagues = require("../models/League");

const createLeague = async (req, res) => {
    const { league } = req.body;
    try {
        const newLeague = await Leagues.create(league);
        console.log("data >>>", newLeague);
        // Return the created fighter object with its _id property in the response
        res.status(200).json({ data: newLeague, success: true, message: `${req.method} - request to League endpoint` });
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


const getAllLeagues = async (req, res) => {
    try {
        console.log(">>>", req.query);
        let query = Leagues.find();
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
        const leagues = await query;

        res.status(200).json({ data: leagues, success: true, message: `${req.method} - request to League endpoint` });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};


const getLeagueByID = async (req, res) => {
    try {
        const { id } = req.params;
        const league = await Leagues.findById(id);
        if (!league) {
            return res.status(404).json({ success: false, message: "League not found" });
        }
        res.status(200).json({ data: league, success: true, message: `${req.method} - request to League endpoint` });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const updateLeague = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, age, location, description } = req.body.league;

        const updatedLeague = await Leagues.findByIdAndUpdate(id, { name, age, location, description }, { new: true });
        if (!updatedLeague) {
            return res.status(404).json({ success: false, message: "League not found" });
        }
        return res.status(200).json({ data: updatedLeague, success: true, message: `${req.method} - request to League endpoint` });
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};


const deleteLeague = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedLeague = await Leagues.findByIdAndDelete(id);
        if (!deletedLeague) {
            return res.status(404).json({ success: false, message: "League not found" });
        } return res.status(200).send();
        // Respond with an empty body for successful deletion
       
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};
{timestamps: true};


module.exports = {
    createLeague,
    getAllLeagues,
    getLeagueByID,
    updateLeague,
    deleteLeague
};
