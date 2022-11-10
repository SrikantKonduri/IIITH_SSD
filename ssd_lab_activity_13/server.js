import os
from flask import Flask, render_template, request, url_for, redirect
from flask_sqlalchemy import SQLAlchemy
from flas_login import {
	login_required,
	login_user,
	UserMixin
	LoginManager,
	logout_user,
	login_required
}

from sqlalchemy.sql import func



basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] =\
        'sqlite:///' + os.path.join(basedir, 'database.db')
app.config['SQLALCHEMY_TRACK_MODIFICuATIONS'] = False


app.config["SQLALCHEMY_TRACK_MODIFICuATIONS"] = False
app.config["SECRET_KEY"] = "indiawonby10runs"
db = SQLAlchemy(app)


login_manager = LoginManager()
login_manager.init_app(app)


class User(UserMixin,db.Model):
    name = db.Column(db.String(80),nullable=False)
    email = db.Column(db.String(80),primary_key=True,nullable=False)
    password = db.Column(db.String(80),nullable=False)


    def __repr__(self):
        return f'<User {self.name}>'

  	def get_id(self):
  		return self.email;


@app.route('/user/signup',methods=['POST'])
def register():
	print("Got request!")
	req = request.get_json()
	username = req["username"]
	email = req["email"]
	password = req["password"]
	user = User(name=username,email=email,password=password);
	check = User.query.filter_by(email=email).first()
	if check is not None:
		db.session.add(user);
		db.commit();
	else:
		return "ALREADY_PRESENT"

@app.route('/user/signout',methods=['POST'])
@login_required
def signout():
	logout_user()
	return "Logged out successfully"

@app.route('/user/sigin',methods=['POST'])
def sigin():
	print("Got request!")
	req = request.get_json()
	username = req["username"]
	email = req["email"]
	password = req["password"]
	user = User(name=username,email=email,password=password);
	check = User.query.filter_by(email=email).first()
	if check is not None:
		db.session.add(user);
		db.commit();
	else:
		return "ALREADY_PRESENT"







if __name__ == "__main__":
	app.run(host="127.0.0.1",port="8080",debug=True)
