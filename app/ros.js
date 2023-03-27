/* websocket server connection*/

var ros = new ROSLIB.Ros({
    url: 'ws://192.168.1.63:9090'
});

ros.on('connection', function() {
console.log('Connected to websocket server.');
});

ros.on('error', function(error) {
    console.log('Error connecting to websocket server: ', error);
});

ros.on('close', function() {
    console.log('Connection to websocket server closed.');
});


/* turtle control actions */

// topic to publish turtle velocity
var cmdVel = new ROSLIB.Topic({
    ros : ros,
    name : '/turtle1/cmd_vel',
    messageType : 'geometry_msgs/Twist'
});

// function to move the turtle, linear velocity msgs publication
function move(lin_vel_x,lin_vel_y){
    var msg = new ROSLIB.Message({
        linear : {
            x : lin_vel_x,
            y : lin_vel_y,
            z : 0.0
        }
    });

    cmdVel.publish(msg);
};

// function to rotate the turtle, angular velocity msgs publication
function rotate(ang_vel_z){
    var msg = new ROSLIB.Message({
        angular : {
            x : 0.0,
            y : 0.0,
            z : ang_vel_z
        }
    });

    cmdVel.publish(msg);
}

// buttons to control turtle movement
document.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", function (){
        if (btn.className == "move_right"){
            move(1,0);
        }
        else if (btn.className == "move_left"){
            move(-1,0);
        }
        else if (btn.className == "move_up"){
            move(0,1);
        }
        else if (btn.className == "move_down"){
            move(0,-1);
        }

        console.log(btn.className);
    });
});


// joystick to control turtle movement
function movementJoystick (){

    //joystick creation
    const manager1 = nipplejs.create({
        zone: document.getElementById("zone_joystick_mov"),
        color: "blue",
        mode: 'static',
        position: {left: '50%', top: '50%'},
    });
    
    let pos = {};
    let interval;
    
    lin_vel_x = 0;
    lin_vel_y = 0;
    
    // starts joystick movement
    manager1.on("start", function(evt, data) {
        interval = setInterval(function() {
            move(lin_vel_x,lin_vel_y)
            console.log(pos);
        }, 25)
    });
    
    // joystick movement using linear velocity (x,y), takes its position
    manager1.on("move", function(evt, data) {
        max_linear = 7.5;
        max_distance = 75.0;
        lin_vel_x = Math.cos(data.angle.radian) * max_linear * data.distance/max_distance;
        lin_vel_y = Math.sin(data.angle.radian) * max_linear * data.distance/max_distance;
        pos = data.position;
    });
    
    // stops joystick movement 
    manager1.on("end", function() {
        if (interval){
            clearInterval(interval);
        }
        move(0,0);
    })
}

// joystick to control turtle orientation
function orientationJoystick (){

    //joystick creation
    const manager2 = nipplejs.create({
        zone: document.getElementById("zone_joystick_or"),
        color: "red",
        mode: 'static',
        position: {left: '50%', top: '50%'},
    });
    
    let interval;
    
    ang_vel_z = 0;
    
    // starts joystick movement (turtle rotation)
    manager2.on("start", function(evt, data) {
        interval = setInterval(function() {
            rotate(ang_vel_z)
        }, 25)
    });
    
    // joystick movement using angular velocity (z),
    manager2.on("move", function(evt, data) {
        max_angular = 2.0;
        max_distance = 75.0;
        ang_vel_z = -Math.cos(data.angle.radian) * max_angular * data.distance/max_distance;
    });
    
    // stops joystick movement (turtle rotation)
    manager2.on("end", function() {
        if (interval){
            clearInterval(interval);
        }
        rotate(0);
    })
}

movementJoystick()
orientationJoystick()