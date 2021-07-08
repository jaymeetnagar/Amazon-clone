const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request } = require("express");
const { response } = require("express");
const stripe = require("stripe")('sk_test_51J41yTSEqbXcAVcUbWSZI9AbM5ipNDpZHB8pxfoHtwQZWS9Em63QhS9jpz00LZpV3CwsIfCNBKUuM3JK2qXOTa0w00jPH64MKe')

//API config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());


//API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

// app.post('/payment/create', async (request, response) => {

//     const total = request.query.total;
//     console.log('Payment Request Recieved, amount >>>', total);

//     const paymentIntent = await stripe.paymentIntents.create({
//         amount: total,
//         currency: 'inr',
//     });

//     // Ok- Created
//     response.status(201).send({
//         clientSecret: paymentIntent.client_secret,
//     });
// })();
//Listen commad
exports.api = functions.https.onRequest(app);