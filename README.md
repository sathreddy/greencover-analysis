# GreenCover Analysis

An application for locating green spaces in cities, based on satellite imaging.

### Vision: 
This project was inspired from MIT's treepedia, which calculates the green view index of different locations based on the amount of trees that are planted on the streets. We wanted to extend this to include all green spaces, so that individuals can find out more about their street, city, state, or anywhere else in the world, based on which address they input. This was also part of an effort to find correlations between equity and green spaces.

### Challenges: 
The main challenge was the time constraint: Originally we wanted to head toward an IoT and machine learning project, but unfortunately this turned out to be out of our scope. We switched over to this project halfway throughout the hackathon.

The next challenge was linking the front end to the back end, as the front end was mostly in JavaScript, while the back end was in Python. This posed to be a great challenge, and ultimately we had to come up with a manual solution, that of using a bash script to run the python program for getting the green spaces after input was recieved from the webpage.


### Implementation/End product: 
This program was implemented in JavaScript for the front end (and partly the back end), using Bing Maps API for getting the images, and Google Maps Geocoding API for extracting longitude/latitude for a given address and determinig the level of zoom necessary in processing the picture (based on how specific the address provided by the user was). 

![homepage](https://i.imgur.com/IILSt9C.png)

The program downloads 3 images at different zoom levels, allowing the user to decide which one is suitable. OpenCV (python) was also used to do the actual thresholding for green values, and generating the output image, along with printing statistics.

ORIGINAL
--------
![original](https://i.imgur.com/9d2Qby8.jpg)

MODDED
------
![modded](https://i.imgur.com/7RWgREC.png)

## Overall: 
The goal of the project was largely met, as we were able to generate the green indexes for any given location, and further were able to compute statistics on it. We ran into many challenges, including trying to convert the OpenCV program from Python to JS so that we could integrate front/back end. An important lesson from this project was figuring out how necessary a plan of action is before starting on a project, and obviously time management.

   Team:  [Akshay Kumar](https://github.com/AKumar-dev),
          [Ananmay Jain](https://github.com/ananmay3),
          [Sathwik Pochampally](https://github.com/sathp),
          [Nydrel Jack](https://github.com/Drel22)

*Created @ HackGT5 Dare to Venture, Fall 2018*
