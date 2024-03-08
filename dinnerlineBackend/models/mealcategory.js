const mongoose = require('mongoose');


function genericValidator(v){
    return v.length > 3 && v.length < 255;
}

const mealCategorySchema = new mongoose.Schema({
    Name: {
        required: true,
        type: String,
        validate: [genericValidator, 'Ce champ doit avoir au minimum 3 caractères et au maximum 255 caractères.']
    },
    Description: {
        required: false,
        type: String,
        validate: [genericValidator, 'Ce champ doit avoir au minimum 3 caractères et au maximum 255 caractères.']
    }
})

module.exports = mongoose.model('MealCategory', mealCategorySchema,"MealCategory")