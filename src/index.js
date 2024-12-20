const express = require('express')
const connect = require('./config/database')
const app = express()

const TweetRepository = require('./repository/tweet-repository')


app.listen(3000, async () => {
    console.log('server started');
    await connect();
    console.log('mongodb is connected')
    // const tweet = await Tweet.create({
    //     content: "First tweet",
    //     userEmail: "a@b.com"
    // });
    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.getAll(2, 4)
    console.log(tweet[0].contentWithEmal)
    
}) 