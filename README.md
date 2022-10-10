# **Slot Machine**

## **Description**
 The application is built using latest **Rails 7.0** for backend server and **React 18** for the front-end application. The database used is **pgSQL.**

## **How to run the application**
Clone this repo 
#### Running the backend server
**Step 1:** cd *slot-machine*
**Step 2:** Run the following commands
 - `bundle install`
 - `bin/dev`

Now the server will be live and accessible from port 3000.
[[http://localhost:3000](http://localhost:3000/)]
# Testing the backend
Run the below command to run all test cases for the application
* `bundle exec rspec`

# Testing the frontend

Run the below command to test the application
 - `npm test` or `yarn test`

# Assumptions
* When a player starts a game/session, they are allocated 10 credits. 
* Pulling the machine lever (rolling the slots) costs 1 credit. 
* The game screen has 1 row with 3 blocks. 
* For player to win the roll, they have to get the same symbol in each block. 
* There are **4 possible symbols**: 
    * cherry (10 credits reward)
    * lemon (20 credits reward)
    * orange (30 credits reward)
    * watermelon (40 credits reward)
* The game (session) state has to be kept on server. 
* If the player keeps winning, they can play forever, but there is some probabilty of re-rolling if they keep hitting jackpot.

# Server Side 
* When a user has less than 40 credits in the game session, their rolls are truly random.
* If a user has between 40 and 60 credits, then the server begins to slightly **cheat**:
    * For each winning roll, before communicating back to client, the server does one **30%** chance roll which decides if server will re-roll the that round.If that roll is true, then server re-rolls and communicates the new result back.
    * If user has above **60 credits**, the server acts the same, but in this case the chance of re-rolling the round increases to **60%**. If that roll is true, then server re-rolls and communicates the new result back.
* There is a cash-out endpoint will set the session credit to zero and user can't continue after that.

# Design decisions

* I have used Redux for global state management of React application.
* Business rules:
	* A session is maintained for a user that keep track of the credit as he plays the game.

# Future Enhancements
* We can implement user model by using **passwordless gem** to keep track of user's credit and session. Right now, the session is being maintained for the user that keep track of the user's credit.
* We can also implement **Serializer** that can make our response more formated and to send more defined response bake to server. As it is a one page application that's why it is not used at the time, but as the app have the flexibilty to enhance this can be very helpful then.