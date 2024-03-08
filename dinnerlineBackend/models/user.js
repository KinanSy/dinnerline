const mongoose = require('mongoose');

function passwordValidator(v){
    return v.length > 8;
}

function genericValidator(v){
    return v.length > 3 && v.length < 255;
}

const userSchema = new mongoose.Schema({
    Firstname: {
        required: true,
        type: String,
        validate: [genericValidator, 'Votre prénom doit avoir au minimum 3 caractères et au maximum 255 caractères.']
    },
    Lastname: {
        required: true,
        type: String,
        validate: [genericValidator, 'Votre nom doit avoir au minimum 3 caractères et au maximum 255 caractères.']
    },
    Email: {
        required: true,
        type: String,
        validate: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    },
    Password: {
        required: true,
        type: String,
        validate: [passwordValidator, 'Votre mot de passe doit avoir au minimum 8 caractères.']
    },
    Phonenumber: {
        required: true,
        type: String,
        validate: /(\b(0041|0)|\B\+41)(\s?\(0\))?(\s)?[1-9]{2}(\s)?[0-9]{3}(\s)?[0-9]{2}(\s)?[0-9]{2}\b/
    },
    IsCollaborator: {
        required: false,
        type: Number,
        default: 0
    }
    
})

module.exports = mongoose.model('User', userSchema,"User")