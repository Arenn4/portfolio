const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan')
const skillRouter = require('./routes/skillRouter');
const PORT = process.env.PORT || 8073
const env = require('dotenv')
const path = require("path")
const sgMail = require('@sendgrid/mail')
require('dotenv').config()

env.config()

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

//MIDDLEWARE
app.use(express.json())
app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, "client", "build")))

//connect to mongo
console.log(process.env.MONGODB_URI)
mongoose.connect(`process.env.MONGODB_URI || mongodb://localhost:27017/portfolio-skills`, { useNewUrlParser: true})
    .then(() => console.log("MongoDB is now connected"))
    .catch(err => console.error(err))

//ROUTES
app.use('/skills', skillRouter)

//logic backend for sending mail
app.post('/send', (req, res) => {
    const msg = {
        to: process.env.DB_USER,
        from: req.body.email,
        subject: req.body.fName + " " + req.body.lName + " has sent a message from your Portfolio",
        text: req.body.message
    };
    sgMail.send(msg)
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

//listen
app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`)
})




