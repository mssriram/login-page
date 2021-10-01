const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const {User} = require('./models/user');
const sha = require('sha1');

const app = express();

mongoose.connect('mongodb://localhost:27017/login-db');

app.set('view engine', 'ejs')
app.set('views', path.resolve( __dirname, 'views') ); // the views folder for the *.ejs files

app.use(express.static('public'))
app.use(express.urlencoded({extended:false}));


app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', (req, res) => {
    res.send(req.body);
})

app.get('/register', (req, res) => {
    res.render('register');
})

app.post('/register', async (req, res) => {
    const {username, email, password} = req.body;
    const hashPassword = sha(password);
    const newUser = new User({username, email, password: hashPassword});
    await newUser.save();
    res.send(req.body);
})

app.listen(3000, () => {
    console.log('connected');
});