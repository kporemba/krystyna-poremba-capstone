# KP Kustoms
_**KP Kustoms is the one stop shop for purchasing handmade one of a kind crochet pieces.**_

Designed to fill the gap between professionalism and expensive fees in hosting a website for a small business, and also my capstone project for BrainStation's Software Engineering Diploma bootcamp. Etsy is the leading platform for small businesses but charges high fees that cut into already small profit margins. Selling on social media is free, however it lacks the professionalism and reliablity of a true website. KP Kustoms will allow for my small business to thrive in a professional setting without costing me monthly fees.

# Installation
Follow the instructions below to run a local version of KP Kustoms. Ensure you have already installed node, npm and MySQL.

1. Clone or download this repo and the backend repo from here: 
https://github.com/kporemba/krystyna-poremba-capstone-api/tree/main

##Set up the backend
2. Create a new database in MySQL called kp_kustoms
3. Install server dependencies:
  Run npm install from inside the server directory
  $ npm install
4. Run migrations
  $ npm run migrate
5. Run seeds
  $ npm run seed
6. Rename .env_sample to .env and change placeholder values with your own.
PORT=<PORT_NUMER>
JWT_SECRET=<SECRET KEY>
DB_HOST=<HOST ADDRESS>
DB_USER=<YOUR DB USERNAME>
DB_PSWD=<YOUR DB PASSWORD>
7. Start the server:
$ npm start

##Set up the frontend
8. Install client dependencies:
  Run npm install from inside the client directory
  $ npm install
9. Set environment variables:

Rename .env_sample to .env and change the placeholder value to the port you set for the server.

REACT_APP_API_URL=http://localhost:<PORT SET IN /server/.env>

10.Start the React app:

$ npm start


### Tech Stack
- React
- MySQL
- Express
- Client libraries:
  - react
  - react-router
  - axios
  - @emailjs/browser
- Server libraries:
  - knex
  - express
  - stripe
  - @stripe/react-stripe-js
  - @stripe/stripe-js

### Auth
This might need to have something

## To Do's
There's still lots to work on, so here's a few things in progress.

- Detailed Stripe API integration to implement shipping costs, taxxes and other transactional tickets to ensure a smooth checkout.
- Updating products to include more size information and detail in sizing.
