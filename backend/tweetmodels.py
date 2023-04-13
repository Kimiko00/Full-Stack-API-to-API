from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class getTweet(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(200))
    user = db.Column(db.String(200))
    created_at = db.Column(db.DateTime)
    
    def __init__(self, text, user, created_at):
        self.text = text
        self.user = user
        self.created_at = created_at