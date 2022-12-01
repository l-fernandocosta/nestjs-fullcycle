import { Tweet, TweetSchema } from './tweet.entity';
import mongoose from 'mongoose';

describe('Tweet Test', () => {
  describe('class test', () => {
    it('should be able to create a tweet', () => {
      const tweet = new Tweet({
        content: 'Hello world',
        screen_name: 'Fernando Costa',
      });

      expect(tweet.content).toBe('Hello world');
      expect(tweet.screen_name).toBe('Fernando Costa');
    });
  });

  describe('Tests with mongodb', () => {
    let conn: mongoose.Mongoose;

    beforeEach(async () => {
      conn = await mongoose.connect(
        'mongodb://root:root@localhost:27017/tweets_test?authSource=admin',
      );
    });

    afterEach(async () => {
      await conn.disconnect();
    });

    it('create a tweet document', async () => {
      const TweetModel = conn.model('Tweet', TweetSchema);
      const tweet = new TweetModel({
        content: 'Hello world',
        screen_name: 'Fernando Costa',
      });

      await tweet.save();

      expect(tweet.content).toBe('Hello world');
      expect(tweet.screen_name).toBe('Fernando Costa');
    });
  });
});
