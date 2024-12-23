import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
    onModel: {
        type: String,
        required: true,
        enum:  ['tweet', 'Comment']
    },
    likable: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: 'onModel'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
}, {timestamps: true})

const Like = mongoose.model('like', likeSchema)

export default Like;