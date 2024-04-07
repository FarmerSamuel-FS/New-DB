const mongoose = require("mongoose");

const fighterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "You are required to have a Fighter name"],
        unique: [true, "You can only have one Fighter by that name"],
        trim: true,
        maxlength: [50,"Max characters are 50"]
    },
    age: {
        type: Number,
        required: false,
        trim:true,
        maxlength: [3, "Age must be 0-999"]
    },
    
    
    description: {
        type: String,
        trim: true,
        maxlength: [500, "Please provide fighters description"]
    },
    league: [
        { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'league' 
    }
], 
});
{ timestamps: true };

module.exports = mongoose.model('fighter', fighterSchema);
