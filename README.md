# Virtual Yoga Instructor App

## Project Descriptions

During and after the pandemic, most of us started exercising at home. One of the most popular sports we do, especially to improve our skills such as focus and flexibility, is yoga. In any sport, it is as important to make the movements correctly as it is to exert effort and do the movements. For this reason, I want to give instructions like a yoga instructor to users who want to do/learn yoga, using the pose estimation method, and giving constructive feedback on the points they cannot do movements correctly to ensure that the movement and flow are done correctly. In the app I want to make, the users will be able to see their own videos while following the flow in the video they have chosen, and by the app the key points will be found in the teacher's pose using pose estimation and instant feedback will be given to the user on how to make the movement more accurate.

The main purpose of this project is to create constructive feedback for people who do yoga, while ensuring that users are not interrupted by learning and following the yoga video. In this way, the application will act as a virtual yoga instructor, giving feedback with speech during the flow, allowing the user to find the right position. To create a successful app, the following objectives must be achieved:
- Setting up a pose estimation network that can compare a yoga video and the user's poses live,
- Creating an application that can display the followed yoga video and the user's video,
- Creating the backend pipeline, which compares the pose in the video and the live pose from the user, and creates constructive feedback,

As the pose estimation network Mediapipe pose estimation API is used, for backend libraries like Flask, opencv, numpy are used. For communication between fronntend and backend socket-io is used and for the frontend react is used.

## What were the challenges?
* Connecting backend and frontend: To connect backend and frontend I used socket-io. But is was very time consuming to figure out how the frames will send to backend, processed and send back to frontend to displayed. If I was starting over this project I would probably use Posenet which has a library in TensorflowJS and easy to integrate to react. While dealing with images, comminicating between python backend and react frontend is hard to manage.
* Creating UI: This was my first time I coded some frontend, I learned react from scratch. Most of the pages are very basic but took time to code for me.
* Constructive feedback generation: I think this was the hardest part. I could calculate cosine similarities and create some error due to this similarities. But at the begining, I was hoping to give more meaningful feedbacks like a real yoga instructor but the complexity was high compared to my time limitation. Therefore, I have to keep it simple and finish the project timely. Yet, this is something to be imporved.

## What have you learned?
* If the project can be completed on a single platform, it should be done that way. Keeping the backend and frontend together can reduce complexity. 
* When the project is started, at least an idea should be made about what to do in a concrete way for any possible problem. Every idea at the point of "It's probably done somehow." creates a problem. 
* I should never do frontend job in the future :)

## Suggestions to contributors
* Contribution can be done by strengthening the feedback mechanism. For this, perhaps, the user can be given feedback in the form of sentences by dividing the body into certain parts, using the angles in these parts and comparing them with the reference video. At least for parts such as legs, arms, head and back, angle calculations such as perpendicular, ninety degrees can be made and some useful comments can be created. 
* The UI can definitely be improved. I was able to code it in the simplest way. 
* The backend can be coded in react. Calculations made in the backend can be done again using Posenet.