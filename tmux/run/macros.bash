tquit() {
    tmux kill-session
}
 
waitForRos() {
    echo "waiting for ROS"
    until timeout 6s rosparam get /run_id > /dev/null 2>&1; do
        echo "waiting for /run_id"
        sleep 1;
    done
    sleep 1;
}

sourceParentWorkspace(){
    until find .catkin_workspace
    do
        cd ..
    done
        source devel/setup.bash
}