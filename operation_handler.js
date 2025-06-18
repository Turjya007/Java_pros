const express = require('express');
const mongoose = require('mongoose');
const rout = express.Router();
const dataschema = require('./schemas/dataschema');
const Data = mongoose.model("Data",dataschema);

//get all rout
rout.get('/',async (req,res)=>{});

//get a rout
rout.get('/:id',async(req,res)=>{});

//post a rout
rout.post('/',async(req,res)=>{
    const newdata = new Data(req.body);
    newdata.save()
    .then(()=>res.status(200).json({message:"Data insert operation was successful.........."}))
    .catch((error)=>{console.error("There was a eroor in saving the data.....",error);
        res.status(500).json({Error : error.message });
    });
    });

//post all rout
rout.post('/all',async(req,res)=>{});

//delete a data
rout.delete('/:id',async(req,res)=>{
    const deleteddata = Data.findByIdAndDelete(req.params.id)
    .then((data)=>{if(!data){
        return res.status(404).json({Message: 'Data not found..........'});
    }
    else{return res.status(200).json({Message: "Data was deleted successfully", DeletedData: data})};
})
.catch((error)=>{console.error("Error deleting data:", error);
    res.status(500).json({ error: error.message });
});
});

module.exports = rout;