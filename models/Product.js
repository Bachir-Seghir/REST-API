const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        uniaque: true
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,

    },
    size: {
        type: String,
    },
    color: {
        type: String,
    },
    categories: {
        type: Array,
    },
    image: {
        type: String,
        required: true,
    },
},
{ timestamps: true },
)

module.exports = mongoose.model("Product", ProductSchema)