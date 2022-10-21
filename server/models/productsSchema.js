const mongoose=require('mongoose');

const productsSchema = new mongoose.Schema({

    product_id : {
        type:String,
        reuqired : true,
        unique : true
    },
    product_type : {
        type:String,
        reuqired : true
    },
    product_price : {
        type:Number,
        reuqired : true
    }

}, { timestamps: true })


const productsModel = mongoose.model("productsModel", productsSchema);
module.exports = productsModel;
