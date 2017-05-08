
from flask import (Flask, render_template, redirect, request, flash, session, jsonify)
from flask_debugtoolbar import DebugToolbarExtension
from model import User, Rating, Movie, connect_to_db, db

app = Flask(__name__)

app.secret_key = "ABC"
app.jinja_env.undefined = StrictUndefined


if __name__ == "__main__":

    app.debug = True
    app.jinja_env.auto_reload = app.debug

    connect_to_db(app)

    DebugToolbarExtension(app)

    app.run(port=5000, host='0.0.0.0')
