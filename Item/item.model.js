import {mongoose } from 'mongoose'


const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    currentPrice: {
        type: Number,
        default: 0
    },
    previousPrice: {
        type: Number,
        default: 0
    },
    description: String,
    image: String,
    rating:{
        type: Number,
        default: 1
    }
})

export const Item = new mongoose.model("item", itemSchema)
