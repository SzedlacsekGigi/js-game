from flask import Flask, render_template

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def home():
    return render_template('homepage.html')


@app.route('/game')
def game():
    return render_template('game.html')

@app.route('/lose')
def lose():
    return render_template('lose.html')

@app.route('/win')
def win():
    return render_template('win.html')

if __name__ == '__main__':
    app.run(
        debug=True,
        port=5000)
