# KP Kustoms

KP Kustoms is the one stop shop for purchasing handmade one of a kind crochet pieces.

Designed to fill the gap between professionalism and expensive fees in hosting a website for a small business, and also my capstone project for BrainStation's Software Engineering Diploma bootcamp. This is a work in progress, and will continue to be updated.

![Product displayed on laptop and phone.](./src/assets/images/KP-Kustoms.png)

## Tech Stack

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

## Installation

Follow the instructions below to run a local version of KP Kustoms. Ensure you have already installed node, npm and MySQL.

1. Clone or download this repo and the backend repo from here:
   https://github.com/kporemba/krystyna-poremba-capstone-api/tree/main

### Set up the backend

2. Create a new database in MySQL called kp_kustoms
3. Install server dependencies:
   Run npm install from inside the server directory

```bash
   $ npm install
```

4. Run migrations

```bash
   $ npm run migrate
```

5. Run seeds

```bash
   $ npm run seed
```

6. Rename .env_sample to .env and change placeholder values with your own. \*Note: You must use port 8080 due to hardcoded variables needed in the checkout process

```js
   PORT=8080
   DB_NAME=kp_kustoms
   DB_HOST=<HOST ADDRESS>
   DB_USER=<YOUR DB USERNAME>
   DB_PASSWORD=<YOUR DB PASSWORD>
```

7. Start the server:

```bash
   $ npm start
```

### Set up the frontend

\*Note: Ensure your local host runs on Localhost:3000 due to hardcoded variables needed in the checkout process

8. Install client dependencies:
   Run npm install from inside the client(kp-kustoms) directory

```bash
   $ npm install
```

9. Start the React app:

```bash
   $ npm start
```

## API References

To successfully host an eCommerce website, a checkout process is needed. To achieve this, test keys have been set up to use the Stripe Checkout API. Below is test card details to use during the checkout process.

```
Brand - Visa
Number - 4242424242424242
CVV - any 3 digits
Expiry Date - any date in the future
```

## To Do's

There's still lots to work on, so here's a few things in progress.

- Detailed Stripe API integration to implement shipping costs, taxxes and other transactional tickets to ensure a smooth checkout.
- Updating products to include more size information and detail in sizing.
