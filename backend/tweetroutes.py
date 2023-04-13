import requests
import tweepy
from flask import jsonify
from tweetmodels import db, getTweet

consumer_key = "W1rPR8gBhwQrlRemfXxzeXt61"
consumer_secret = "UBBpLajtaffCOfLUAY04PDDQMaw2e4jYNazSnTflIsN0fKn1pE"
access_token = "968560301464461312-z9AfFyMs4tNaomy5V5dPSv2zqxXawVA"
access_token_secret = "S6Jx76oxiQi8bFgEICZ8JP276vlmwiCrEHKZDTcJb8Pkg"

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)

api = tweepy.API(auth)

class Tweet:
    def __init__(self, app):
        self.app = app
    
    def fetch_tweets(self):
        tweets = api.search_tweets(
            q = "Gundam",
            lang = "en",
            count = 100
        )
        
        for tweet in tweets:
            text = tweet.text
            user = tweet.user.screen_name
            created_at = tweet.created_at
            db_tweet = getTweet(
                text = text,
                user = user,
                created_at = created_at
            )
            db.session.commit()
        
    # def register_tweets(self):
    #     @self.app.route('/fetch-tweets')
    #     def fetch_tweets_route():
    #         self.fetch_tweets()
    #         return 'Tweets fetch and store to database'
    
    #     @self.app.route('/tweets')
    #     def tweet_route():
    #         tweets = getTweet.query.all()
    #         output = []
            
    #         for tweet in tweets:
    #             tweet_data = {
    #                 'text': tweet.text,
    #                 'user': tweet.user,
    #                 'created_at': tweet.created_at.strftime('%Y-%m-%d %H:%M:%S')
    #             }
    #             output.append(tweet_data)
    #         return jsonify({"tweets_data": output})
    def register_routes(self):
        @self.app.route('/tweety')
        def data_route():
            self.fetch_tweets()
            
            questions = getTweet.query.all()
            r_output = []
            for data in questions:
                data_question = {
                    'title': data.title,
                    'link': data.link
                }
                r_output.append(data_question)
            return {"data": r_output}
        
        @self.app.route('/data/<id>')
        def single_data_route(id):
            questions = getTweet.query.get_or_404(id)
            
            return {
                "title": questions.title,
                "link": questions.link
            }