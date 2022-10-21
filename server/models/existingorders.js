const mongoose=require('mongoose')
const orderSchema=new mongoose.Schema({
    order_id:{
        type:String,
        required:true
    },
    user_id:{
        type:String,
        rquired:true
    },
    address_id:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"picked up"
    },
    date:{
        type:Date,
        required:true
    },
    store_details:new Object,
    product_type:new Object
},
    { timestamps: true })
mongoose.model("Order",orderSchema)