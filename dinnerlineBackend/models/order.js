const mongoose = require('mongoose');

const mealContentSchema = new mongoose.Schema({
    MealId: {
        required: true,
        type: Number,
    },
})

const mealCategorySchema = new mongoose.Schema({
    CreationDate: {
        required: true,
        type: String,
    },
    StatusId: {
        required: false,
        type: Number,
    },
    UserId: {
        required: false,
        type: Number,
    },
    Content: {
        required: false,
        type: [mealContentSchema],
    }
})

module.exports = mongoose.model('MealCategory', mealCategorySchema,"Order")