const mongoose=require('mongoose')
const orderSchema=new mongoose.Schema({
    order_id:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    store_location:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    store_phone:{
        type:Number,
        required:true
    },
    total_items:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        default:"Ready to Ship"
    }

},
    
    { timestamps: true })
mongoose.model("Order",orderSchema)