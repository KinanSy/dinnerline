const mongoose = require('mongoose');


function genericValidator(v){
    return v.length > 3 && v.length < 255;
}

const tagSchema = new mongoose.Schema({
    Name: {
        required: true,
        type: String
    }
});

const mealSchema = new mongoose.Schema({
    Name: {
        required: true,
        type: String,
        validate: [genericValidator, 'Ce champ doit avoir au minimum 3 caractères et au maximum 255 caractères.']
    },
    Description: {
        required: false,
        type: String,
    },
    Content: {
        required: false,
        type: String,
    },
    Price: {
        required: true,
        type: mongoose.Types.Decimal128,
    },
    ImageUrl: {
        required: false,
        type: String,
    },
    Tags: {
        required: false,
        type: [tagSchema],
    },
})

module.exports = mongoose.model('Meal', mealSchema,"Meal")