const express = require("express");
const employee = require("./../models/employee");

const router = express.Router();

router.post("/employee", async (req, res) => {
    console.log(req.body)
    const data = new employee(req.body)
    const result = await data.save()

    if(!result){
        res.json({
            status: "Failed",
            message: "Data is not inserted"
    })}
    
    else{
        res.json({
            status: "Success",
            message: "Data is inserted",
            data: result
        })
    
    }
})
// get records
router.get('/employee', async (req, res) => {
try{
    const result = await employee.find()
    if(!result){
        res.json({
            status: "Failed",
            message: "Data is not found"
        })
    }
        else{
            res.json({
                status: "Success",
                message: "Data is found",
                data: result
                })    }
    }
catch(e){
    console.log(e)

}
})

//get single record
router.get('/employee/:id', async (req, res) => {
try{
    const _id = req.params.id;
    const result = await employee.findById(_id);
    if(!result){
        res.json({
            status: "Failed",
            message: "Data is not found"
        })
    }
        else{
            res.json({
                status: "Success",
                message: "Data is found",
                data: result
                })    }
    }
catch(e){
    res.send(e)
}
})
    

//uptdate records
router.put('/employee/:id', async (req, res) => {
    try{
        const _id = req.body._id;
        const result = await employee.findByIdAndUpdate(req.params._id,req.body,{new:true});
        if(!result){
            res.json({
                status: "Failed",
                message: "Data is not updated"
            })
        }
            else{   
                res.json({
                    status: "Success",
                    message: "Data is updated",
                    data: result
                    })    }
        }   
    catch(e){
        res.send(e)

    }

})

// delete records
router.delete('/employee/:id', async (req, res) => {


    try{
        const _id = req.body._id;
        const result = await employee.findByIdAndDelete(req.params._id);
        if(!result){
            res.json({
                status: "Failed",
                message: "Data is not deleted"
            })
        }
            else{
                res.json({
                    status: "Success",
                    message: "Data is deleted",
                    data: result
                    })    }
        }
    catch(e){
        res.send(e)
    }
})


module.exports = router
