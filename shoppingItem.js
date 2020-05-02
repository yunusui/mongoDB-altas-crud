let mongoose = require('mongoose');
let shopItemSchema = mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    itemName: {
        type: String,
        require: true
    },
    itemBought: {
        type: Boolean,
        require: true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

let item = module.exports = mongoose.model('Items', shopItemSchema);