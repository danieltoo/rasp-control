from flask import Flask,render_template
import commands
app = Flask(__name__ )


@app.route('/type/<type>')
def send_type(type):
    command = 'xdotool type ' + type
    commands.getoutput(command)
    print command
    return 'type %s' % type

@app.route('/key/<key>')
def send_key(key):
    command = 'xdotool key ' + key
    commands.getoutput(command)
    print command
    return 'key %s' % key

@app.route('/mousemove_relative/<grade>/<distance>')
def send_grade_distance(grade, distance):
    command = 'xdotool mousemove_relative --polar {} {}'.format(grade ,distance)
    commands.getoutput(command)
    print command
    return 'Grade and distance {} {}'.format(grade, distance)  

@app.route('/click/<button>')
def send_click(button):
    command = 'xdotool click ' + button
    commands.getoutput(command)
    print command
    return 'Button %s' % button

@app.route('/controlpi')
def index():
    return render_template('./index.html')



if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=False)