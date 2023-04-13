from flask import Flask
from flask_migrate import Migrate
# from stackmodels import db
from tweetmodels import db
# from stackroutes import Stack
from tweetroutes import Tweet

app = Flask(__name__)
migrate = Migrate(app, db)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///questions.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

db.init_app(app)
with app.app_context():
    db.create_all()

# stack = Stack(app)
# stack.register_routes()

tweet = Tweet(app)
tweet.register_routes()

if __name__ == '__main__':
    app.run(debug=True)
