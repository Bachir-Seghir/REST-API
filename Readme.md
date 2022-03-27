# WiStore Dashboard - Backend Part

This is the backend part of WiStore Dashboard created with Node.js & Express Server

## Libraries & nmp Modules used

* Express server
* Mongoose to manage MongoDB Database
* Jsonwebtoken to perform Authentication
* Stripe to Manage Payments


## Installaiom

First of all, clone the repository into your machine :

### `git clone https://github.com/Bachir-Seghir/Jobify.git`

In the project directory install all dependencies:

### `npm install`

## Database Installation :
create your Database via MongoDB Atlas and get the DB Url then put it in
the /.env file : MONGO_URL=yourdatabaseURL

update the /.env variables to fit your owns:

  * ENCRYPTION_SECRET=somethingSpecialAsSecret
  * STRIPE_KEY=sk_test....yourStripeKey
  * JWT_SECRET=SomethingSpecial

In the project directory, start the server : 

### `npm run dev`


### Deployment

You can deploy the server on Heroku. 

