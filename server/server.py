from flask import Flask,render_template
import commands
app = Flask(__name__)


@app.route('/type/<type>')
def send_type(type):
    commands.getoutput('xdotool type ' + type)
    return 'type %s' % type

@app.route('/controlpi')
def index():
    return render_template('./index.html')

