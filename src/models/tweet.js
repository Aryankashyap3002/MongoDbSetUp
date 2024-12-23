import mongoose from 'mongoose'

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        max: [250, 'Tweet cannot be more than 250 words']
    },

    hashtags: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hashtag'
        }
    ]
    
}, { timestamps: true });

tweetSchema.virtual('contentWithEmal').get(function process() {
    return `${this.content} \nCreated by: ${this.userEmail}`;
});

const Tweet = mongoose.model('Tweet', tweetSchema);
export default Tweet
