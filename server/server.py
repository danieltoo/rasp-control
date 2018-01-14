from flask import Flask,render_template
import commands
app = Flask(__name__ )


@app.route('/type/<type>')
def send_type(type):
    commands.getoutput('xdotool type ' + type)
    return 'type %s' % type

@app.route('/key/<key>')
def send_key(key):
    commands.getoutput('xdotool key ' + key)
    return 'key %s' % key

@app.route('/controlpi')
def index():
    return render_template('./index.html')



if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=False)