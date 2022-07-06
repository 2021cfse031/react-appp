# Cowin18-group11-assignment2 CICD Pipeline using Jenkins


## Project Name & Pitch <br/>

## CICD Pipeline using Jenkins - Group 11

This Project is a sub-task of COWIN vaccination web application specially designed to conduct and serve vaccination drives for school students. This project majorly focuses on the Student Coordinator role in web application who is responsible for managing vaccination drives at school level. 

A School coordinator upon successful login gets navigated to the landing page which contains a dashboard of vaccinated students data, updates upcoming vaccination drives through a form submission, exports user data via CSV format, adds and manages student details.

This application is built with React, Javascript and CSS and Django Rest Framework

The main project goal is to implement a CICD Pipeline for the project and perform various stages involved in project delivery process of DevOps.

# Project Screenshots

# Pipeline Configuration
![pipeline-input](https://user-images.githubusercontent.com/94062868/177508807-328b0719-7597-4f35-8019-45e6eb7a1fdd.PNG)
## Fig: Pipeline Configuration - Getting the project code from Github - Version Control Tool 
![jenkinsfile](https://user-images.githubusercontent.com/94062868/177508786-5bd6824a-c787-498a-920f-2b391674bd66.PNG)
## Fig: Pipeline is made functionable using Jenkinsfile.
![pipeline](https://user-images.githubusercontent.com/94062868/177508799-ffad254f-66f2-4dde-a61d-6c608a00842b.PNG)
## Fig: Cowin18 Pipeline output using Jenkins file as input

# Tools / Sources used for Configuration
![github-repo](https://user-images.githubusercontent.com/94062868/177508827-c5a6c1f3-11d8-4ce3-92c7-ccdecc0bc59d.PNG)
## Fig: Github Repository used in this project
![ngrok_for_webhook](https://user-images.githubusercontent.com/94062868/177508794-6fc6cb1a-1654-45b5-a358-81ee0323840e.PNG)
## Fig: NGROK tool used for exposing local ip as public url through webhook
![github-webhook](https://user-images.githubusercontent.com/94062868/177508831-5308f4fc-e758-4ee5-994c-8664b0d2b665.PNG)
## Fig: Github Webhook configured for recognising local ip of Jenkins server as public url 
![nodejs-tool](https://user-images.githubusercontent.com/94062868/177508798-1441fed1-c5cd-4719-b655-4b11ce6f6d0f.PNG)
## Fig: NodeJs Tool Configuration
![sonarqube-docker-container](https://user-images.githubusercontent.com/94062868/177508821-62dc5b7d-e32b-4095-afd0-cfba7ff3db30.PNG)
## Fig: Docker Container for hosting Sonarqube server for performing Code Analysis

# Test Output Screenshots 
![sonarqube-output](https://user-images.githubusercontent.com/94062868/177508822-29a9e0f7-2d88-4583-bb7e-2495ecda86b5.PNG)
## Fig: SonarQube Code Analysis - Code Analysis of Github Project - View 1
![sonarqube-test-output](https://user-images.githubusercontent.com/94062868/177508823-4acbcaa9-c78e-4272-892e-e85035e44e11.PNG)
## Fig: SonarQube Code Analysis - Code Analysis of Github Project - View 2
![selenium-webdriver](https://user-images.githubusercontent.com/94062868/177508820-6700fe54-0ba6-49d7-acf9-10ae8eece853.PNG)
## Fig: Selenium Webdriver tool for performing selenium tests
![selenium-testcases](https://user-images.githubusercontent.com/94062868/177508812-f1ee1b04-b8ae-4490-9372-bbe1de1837c0.PNG)
## Fig: Selenium Test Cases 
![selenium-tests](https://user-images.githubusercontent.com/94062868/177508816-90e7090a-50a4-48d8-aa4d-6e242e932ab5.PNG)
## Fig: Selenium Test Case Output - View 1
![selenium-testcase-output](https://user-images.githubusercontent.com/94062868/177508810-addd7ddf-6fc8-4816-96f4-b5bfa4a58047.PNG)
## Fig: Selenium Test Case Output - View 2


# Installation and Setup Instructions

Clone download this repository. You will need node and npm installed globally on your machine.

Installation <br/>
—------------ <br/>
npm install

To Start Server: <br/>
—------------------ <br/>
Goto http://localhost:8080 <br/>
Goto http://localhost:9000 <br/>
Run the backend locally using python manage.py runserver command

To Visit the app: <br/>
------------------ <br/>
http://localhost:3000/home

To Check Bulk Upload use "upload.csv" file in this repo

Reflection <br/>
—------------------- <br/>
This was a three week project built during the module of CICD Pipeline using Jenkins. Project goals include building a pipeline for the git repo hosted at this url and perform various tests like Code Analysis using Sonarqube and UAT testing using Selenium. 

One of the major challenges for us was to configure the environment for this project as it is deployed in Windows machine. Understanding various concepts involved in testing and performing code analysis for the whole project was interesting. We learnt how to automate build of a project through Jenkins after passing the code through multiple test cases.

During the final stage of this assignment, We could understand some of the stand out use case scenarios like Pulling the code from Git repo through Webhook, Using ngrok tool for making local ip exposed as public ip, Need for performing Sonarqube Code Analysis, Understanding what Code Coverage, Line Coverage, Percentage of Duplicacy and Bugs in Code, Making ourselves familiar about Docker, Performing Functional testing of Backend and Frontend code using Selenium, Understanding usage of Selenium Webdriver to check the output for Selenium test cases. 


