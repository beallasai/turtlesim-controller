# Turtlesim Controller

A simple controller for the ROS turtlesim_node using [NippleJS](https://yoannmoi.net/nipplejs/) and [Rosbridge](http://wiki.ros.org/rosbridge_suite/Tutorials/RunningRosbridge).

![gif](.fig/demo.gif)

It allows you to control the ROS turtlesim_node from a simple webpapp using Rosbridge.
- Move the turtle with the right joystick or clicking the buttons. 
- Change its orientation using the left joystick.

*This repo also contains a scripts folder, some extra code included to better know ROS functionalities using turtlesim_node.*


## Dependencies
- ROS Noetic
- Rosbridge
- NippleJS


## Set up project
1. Clone the repo:
```
git clone https://github.com/beallasai/turtlesim-controller.git
```
2. Move into project folder:
```
cd turtlesim-controller
```
3. Source ROS setup (do it everytime you want to use ROS commands):
```
source /opt/ros/noetic/setup.bash
```

## Usage
From the project folder, execute the `.tmuxinator.yml` file:
```
tmuxinator
```
  This will open a tmux session with 3 panes:
  1. Starts Rosbridge Server: `roslaunch rosbridge_server rosbridge_websocket.launch`
  2. Starts turtlesim_node in a new terminal: `rosrun turtlesim turtlesim_node`
  3. Opens the webapp in browser in a new terminal: `xdg-open index.html`

### Now you can control the turtle using joysticks or buttons!!!
