#!bin/bash

# backend mock server
virtualenv devil-pg
source devil-pg/bin/activate
pip3 install flask
pip3 install flask-cors
gnome-terminal -- python3 /Users/vk/Library/Application\ Support/JetBrains/PyCharmCE2023.2/scratches/flask-server.py

# frontend
gnome-terminal -- npm start