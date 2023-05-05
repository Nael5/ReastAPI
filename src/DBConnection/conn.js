const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/employee")
.then(() => {
    console.log("Connected to MongoDB...")
}).catch((err) => {
    console.log("Could not connect to MongoDB...")
    console.log(err)
}); 
