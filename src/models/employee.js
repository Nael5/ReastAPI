const mongoose = require("mongoose");
const validator = require("validator");

const emplyeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:[true, "Email is already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    number: {
        type: Number,
        required: true,
        min: 11, 
    
    },
    nic: { 
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
});

const employee = new mongoose.model('employee', emplyeeSchema);

module.exports = employee;

