const mongoose=require('mongoose');

const userOrderSchema = new mongoose.Schema({

    order_id:{
        type: String              
    },
    user_id:{
        type: String,
        required:true,
    },
    order_address_id:{
        type: String,
        required:true,
    },
    order_date:{
        type:Date,
        default: Date.now
    },
    order_status:{
        type:String,
        required:true
    },
    order_product_type : {
        type: new Object,
        required:true
    },
    order_store_details : {
        type: new Object,
        reuqired : true
    }
    

}, { timestamps: true })

const userOrderModel = mongoose.model("userOrderModel", userOrderSchema);

module.exports = userOrderModel;
