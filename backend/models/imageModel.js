import mongoose from "mongoose";

const Schema = mongoose.Schema

const imageSchema = new Schema({
    price : {
        type: Number,
        required: true,
    },
    photo: {
        type: String
    }
})

const Image = mongoose.model("Image", imageSchema)

export default Image