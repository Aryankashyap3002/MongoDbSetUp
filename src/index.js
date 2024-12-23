import express from 'express'
import {connect} from './config/database.js'
const app = express()

import TweetService from './services/tweet-service.js'

app.listen(3000, async () => {
    console.log('server started');
    await connect();
    console.log('mongodb is connected')
    let service = new TweetService();
    service.create({
        content: "Done with #refactoring ?"
    })
   
}) 