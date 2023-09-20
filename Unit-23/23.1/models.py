"""Models for Blogly."""

from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

def connect_db(app):
    """Connect to database."""
    db.app = app
    db.init_app(app)
    

class User(db.Model):
    """User."""
    
    __tablename__= 'users'
    
    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)
    first_name = db.Column(db.String(50),
                           nullable=False)
    last_name = db.Column(db.String(50),
                          nullable=False)
    image_url = db.Column(db.String(1000),
                          nullable=False)
    
    def __repr__(self):
        """Show info about user."""
        
        u = self
        return f"<User {u.id} {u.first_name} {u.last_name} {u.image_url}>"

class Post(db.Model):
    """Post."""
    
    __tablename__= 'posts'
    
    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)
    title = db.Column(db.String(200),
                      nullable=False)
    content = db.Column(db.String(),
                        nullable=False)
    created_at = db.Column(db.DateTime(timezone=True),
                           onupdate=datetime.now)
    user_id = db.Column(db.Integer,
                        nullable=False)
    
    def __repr__(self):
        """Show info about the post."""
        
        p = self
        return f"<Post {p.id} {p.title} {p.content} {p.created_at} {p.user_id}>"