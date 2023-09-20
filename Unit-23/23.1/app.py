"""Blogly application."""

from flask import Flask, request, redirect, render_template
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, User, Post

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = "shhhhhh"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

connect_db(app)
app.app_context().push()
db.create_all()


@app.route('/')
def home():
    """Main blog page. Shows list of all users on site."""
    
    users = User.query.all()
    posts = Post.query.all()
    
    return render_template("index.html", users=users, posts=posts)


@app.route('/users')
def users():
    """Main blog page. Shows list of all users on site."""
    
    users = User.query.all()
    posts = Post.query.all()
    
    return render_template("index.html", users=users, posts=posts)


################## USERS #####################

# New Users

@app.route('/users/new')
def new_user():
    """Form for adding new users."""
    
    return render_template("new_user.html")


@app.route('/users/new', methods=["POST"])
def add_user():
    """Add the new user and redirect to the user's page."""
    
    first_name = request.form["first-name"]
    last_name = request.form["last-name"]
    image_url = request.form["image-url"]
    
    new_user = User(first_name=first_name, last_name=last_name, image_url=image_url)
    db.session.add(new_user)
    db.session.commit()
    
    return redirect(f"/users/{new_user.id}")

# User Info

@app.route('/users/<u_id>')
def user_page(u_id):
    """Page template for each individual user."""
    
    user = User.query.get(u_id)
    posts = Post.query.filter_by(user_id=u_id)
    
    print('!!!!!!!!!!!!!!!!!!!!!!')
    print(user)
    
    return render_template("user.html", user=user, posts=posts)

# Edit User

@app.route('/users/<user_id>/edit', methods=["GET"])
def edit_user(user_id):
    """Edit an individual user."""
    
    user = User.query.get(user_id)
    
    return render_template("edit_user.html", user=user)


@app.route('/users/<user_id>/edit', methods=["POST"])
def apply_edit(user_id):
    """Edit an individual user."""
    
    user_to_edit = User.query.get_or_404(user_id)
    
    user_to_edit.first_name = request.form["first-name"]
    user_to_edit.last_name = request.form["last-name"]
    user_to_edit.image_url = request.form["image-url"]
    
    db.session.commit()
    
    return redirect(f"/users/{user_id}")

# Delete User

@app.route('/users/<user_id>/delete')
def delete_page(user_id):
    """Page template for each individual user."""
    
    user_to_delete = User.query.get_or_404(user_id)
    
    db.session.delete(user_to_delete)
    db.session.commit()
    
    return redirect("/users")


################## POSTS #####################

# 



if __name__ == '__main__':
    app.run()