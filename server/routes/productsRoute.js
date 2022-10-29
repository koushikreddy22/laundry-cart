const express = require("express");
const router = express.Router();
const ProductsModel = require('../models/productsSchema');

router.get('/', async (req, res) => {

    
    try{

        const products = await ProductsModel.find();
        res.status(200).json({
            status:"Success",
            message:products
        })
        

    }
    catch(e){
        res.status(401).json({ 
            status:"Failed",
            message:e.message
        });
    }

});



router.post('/', async (req, res) => {

    try{

       console.log(req.body);
        const product = await ProductsModel.create(req.body);

        res.status(200).json({
            status:"Success",
            message:product
        });
                

    }
    catch(e){
        res.status(401).json({ 
            status:"Failed",
            message:e.message
        });
    }

});

router.delete('/:id', async (req, res) => {

    try{

            
            const message = await ProductsModel.deleteMany({_id:req.params.id});

            res.status(200).json({
                status:"Success",
                message:message,
                
            });
    
             

    }
    catch(e){
        res.status(401).json({ 
            status:"Failed",
            message:e.message
        });
    }

});

module.exports = router;