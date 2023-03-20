# Turtlesim Controller

A simple controller for the ROS node turtlesim using NippleJS.

![gif](.fig/demo.gif)

## Dependencies
- ROS Noetic
- Rosbridge
- NippleJS


## Usage
1. Start Rosbridge Server: `roslaunch rosbridge_server rosbridge_websocket.launch`
2. Start turtlesim node in a new terminal: `rosrun turtlesim turtlesim_node`
3. Open `index.html` in browser and control the turtle simulation using joysticks or buttons