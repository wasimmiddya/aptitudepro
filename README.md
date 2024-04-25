# Aptitudepro
This is an online aptitude test preparation web application designed for our college minor project.

## Contributors::
1. Sohan Shaw
2. Zeesan Tarafdar
3. Ujjal Pattra
4. Wasim Raja Middya


## Project set up::
Clone the repository by using the following command
```shell
    git clone https://github.com/wasimmiddya/aptitudepro.git
```
After cloning the repository you will see -
The project has 3 parts frontend(i.e client), backend(i.e server) and a service called webcam_server(i.e it serves the AI related task, in this case it is a flask server that accept request and send video stream and violation message.

1. frontend set up
    - Go to the client folder
     ```shell
        cd client
     ```
    - Run either ```$ npm install``` or ```$ yarn ``` command to install the dependancies and packages

2. backend set up
   - Got to the server folder
     ```shell
         cd server
     ```
   - Run either following commands to install the dependancies and packages
     ```shell
         npm install
     ```
     or
     ```shell
         yarn
     ```

3. Webcamera Server set up
   - Go to webcam_server folder
     ```shell
     cd webcam_server
     ```
   - Install flask library using
     ```shell
      pip install flask
     ```
   - And install opencv library
     ```shell
     pip install opencv-python
     ```


  After all these set up has been done, go to the client folder and run ```$ npm run dev``` or ```$ yarn dev``` command. Same works for backend as well.
  To run webcamera server go to webcam_server folder and run ```$ python webcam.py``` command
