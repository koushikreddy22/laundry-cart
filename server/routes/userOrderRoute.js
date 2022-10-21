const express = require("express");
const router = express.Router();
const UserOrderModel = require('../models/userOrderSchema');

router.get('/', async (req, res) => {

    
    try{

        const userOrders = await UserOrderModel.find();
        res.status(200).json({
            status:"Success",
            message:userOrders
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
        const UserOrderDetails = await UserOrderModel.create(req.body);

        res.status(200).json({
            status:"Success",
            message:UserOrderDetails
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