const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

var express = require('express')
var app = express()

app.post('/login', function (req, res) {
  if (req.body.email === 'correct@email.com' && req.body.password === 'test') {
    res.status(200).json({ id: "AN33343", name: "James Bond"});
  } else {
    res.status(400).json({ error: "Invalid email or password"});
  }
})

exports.api = functions.https.onRequest(app);
