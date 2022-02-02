# ColorAssignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.

## Pre-requisites

1. Make sure Node.js is installed in the system by running the command "node --version".
2. Make sure NPM is installed in the system by running the command "npm --version". FYI, while installing Node.js, the NPM also installed by default.
3. Make sure Angular CLI is installed in the system by running the command "ng version". If it is not installed, run the command "npm install @angular/cli -g" to get the latest Angular CLI.
4. Note: I have created the project with the below specified version, so please make sure that your system should have the same or greater version to run it in your system
	a. Angular CLI: 13.0.4
	b. Node: 16.13.0
	c. Package Manager: npm 8.1.0

## Run the color-assignment in the local on Node.js server

1. Pull the latest code from GitHub "https://github.com/Ramkumar4271/color-assignment.git"
2. Run the command "npm install" to get the dependencies/3rd party libraries
3. Run the command "ng add @angular/material" requires for using angular material and responsive. While running the command, select defaults by pressing Enter key.
4. By running the command either "npm start" or "ng serve" to deploy the color-assignment on Node.js server.
5. Open the browser and enter the url "http://localhost:4200". 

## Run the color-assignment docker image

1. Run "docker pull ramkumar4271/color-assignment". To get the latest docker image from https://hub.docker.com/r/ramkumar4271/color-assignment
2. Create the container by using "docker run -p 4200:80 <DOCKER IMAGE ID>" to verify it in your local by opening the browser and enter the url "http://localhost:4200".
