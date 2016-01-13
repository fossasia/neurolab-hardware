#!/bin/bash
unzip Light.zip
cd Light
java -Xmx1024M -Xms1024M -jar minecraft_server.1.8.8.jar
cd ..
rm -rf Light
