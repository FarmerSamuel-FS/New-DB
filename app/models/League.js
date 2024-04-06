const mongoose = require("mongoose");

const leagueSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        maxlength: [50,"Max characters are 50"]
    },
    age: {
        type: Number,
        trim: true,
        maxlength: [3, "Age must be 0-999"]
    },
    location: {
        type:String,
        trim: true,
        maxlength: [50, "location name can only be 50 characters"]
    },
    description: {
        type: String,
        trim: true,
        maxlength: [500, "Please provide league description"]
    },
    fighters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Fighter' }] // Reference to fighters
},
{ timestamps: true });

module.exports = mongoose.model('League', leagueSchema);
