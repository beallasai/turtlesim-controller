# Turtlesim Controller

A simple controller for the ROS turtlesim_node using NippleJS and Rosbridge.

![gif](.fig/demo.gif)

It allows you to control the ROS turtlesim_node from a simple webpapp using Rosbridge.
Move the turtle with the right joystick or clicking the buttons. 
Change its orientation using the left joystick.


## Dependencies
- ROS Noetic
- Rosbridge
- NippleJS


## Set up project
```
git clone https://github.com/beallasai/turtlesim-controller.git
cd turtlesim-controller
```


## Usage
1. Start Rosbridge Server: `roslaunch rosbridge_server rosbridge_websocket.launch`
2. Start turtlesim node in a new terminal: `rosrun turtlesim turtlesim_node`
3. Open `index.html` in browser and control the turtle simulation using joysticks or buttons
