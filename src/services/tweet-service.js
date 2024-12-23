import TweetRepository from '../repository/tweet-repository.js';
import HashtagRepository from '../repository/hashtag-repository.js';

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();   
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data) {
        const content = data.content;
        let tags = content.match(/#[a-zA-Z0-9_]+/g);
        tags = tags.map((tag) => tag.substring(1).toLowerCase());
        console.log(tags);
        const tweet = await this.tweetRepository.create(data)
        let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
        let titileOfPresenttags = alreadyPresentTags.map((tag) => tag.title)
        let newTags = tags.filter(tag => !titileOfPresenttags.includes(tag));
        newTags = newTags.map(tag => ({title: tag, tweets: [tweet.id]}))
        await this.hashtagRepository.bulkCreate(newTags)
        alreadyPresentTags.forEach((tag) => {
            tag.tweets.push(tweet.id);
            tag.save();
        })
        return tweet;
    }
 }

export default TweetService;