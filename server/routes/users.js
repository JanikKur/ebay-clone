const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const Database = require('../database/database');
const bcrypt = require('bcrypt');
const validateUser = require('../middlewares/validate');
const saveImage = require('../middlewares/saveImage');
const uuid = require('uuid');
const nodemailer = require('nodemailer');

router.get('/', async (req, res) => {
    try{
        const users = await Database.get('users');
        users.forEach(user => {
            delete user.password;
            delete user.email;
            delete user.profileImage;
            delete user.favourites;
        });
        res.send(users)
    }
    catch(err){
        res.sendStatus(500);
    }
})

router.get('/id/:id', async (req, res) => {
    try{
        const users = await Database.get('users', {id: req.params.id});
        users.forEach(user => {
            delete user.password;
            delete user.email;
            delete user.profileImage;
            delete user.favourites;
        });
        res.send(users)
    }
    catch(err){
        res.sendStatus(500);
    }
});


router.get('/loggedInUser', validateUser, async (req, res) => {
    try{
        const users = await Database.get('users', {id: req.user.user.id});
        delete users.password;
        res.send(users)
    }
    catch(err){
        res.sendStatus(500);
    }
});

router.get('/favourites', validateUser, async (req, res) => {
    try{
        const data = await Database.get('users', {id: req.user.user.id})
        res.send(data[0].favourites); //TODO: delete password
    }
    catch{
        res.sendStatus(500);
    }
});

router.post('/', async (req, res) => {
    const salt = await bcrypt.genSalt(5);
    const password = await bcrypt.hash(req.body.password, salt);
    const user = {
        ...req.body,
        id: uuid.v4(),
        password: password,
        profileImage: '/images/standardUser.png'
    }
    try{
        await Database.post('users', user);
        res.sendStatus(201);
    }
    catch(err){
        res.sendStatus(500);
    }
})

router.post('/login', passport.authenticate('local', {session: false}), (req, res) => {
    jwt.sign({ user: req.user }, 'StRoNGs3crE7', (err, token) => {
        if (err) return res.json(err);
        // Send Set-Cookie header
        res.cookie('jwt', token, {
            httpOnly: true
        });

        delete req.user.password

        res.send(req.user);
        // Return json web token
        return res.json({
            jwt: token
        });
    });
});

router.post('/resetpassword', (req, res) => {
    const email = req.body.email;
    //Set reset code in user database for user
    //send email with code
    //Frontend:
    //Check if Email Matches Code in db
    //Update Password

    /* var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'janik.kurtz2@googlemail.com',
            pass: 'qiimnqtiagwtozdy'
        }
    });

    var mailOptions = {
        from: 'janik.kurtz2@googlemail.com',
        to: email,
        subject: 'Passwort zurücksetzen',
        html: `
        <p>Verwenden sie diese Nummern um ihr <a href="http://localhost:3000/resetPassword?mail=${email}">Passwort zurückzusetzen</a>:</p><br/> 
            <h3>${uuid.v1()}</h3>`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    }); */
    res.sendStatus(200);
});

router.put('/:id',  [validateUser ,saveImage], async (req,res) => {
    if(req.user.user.id !== req.params.id){
        res.sendStatus(401);
        return;
    }
    const newData = {
        username: req.body.username, 
        email: req.body.email,
    }
    if(req.files){
        newData.profileImage = req.files["file"].fileLink;
    }
    try{
        await Database.put('users', {id: req.params.id}, newData);
        const newUserData = { user: {...req.user.user, ...newData} };
        delete newUserData.password;
        jwt.sign(newUserData, 'StRoNGs3crE7', (err, token) => {
            if (err) return res.json(err);
            // Send Set-Cookie header

            res.cookie('jwt', token, {
                httpOnly: true
            });
    
            delete req.user.password
    
            res.send(req.user);
            // Return json web token
            return res.json({
                jwt: token
            });
        });
    }
    catch(err){
        console.log(err);
        res.sendStatus(500);
    }
});

router.post('/like', validateUser, async (req,res) => {
    try{
        await Database.put('users', {id: req.user.user.id}, {favourites: req.body.quizID}, '$push');
        res.sendStatus(200)
    }
    catch(err){
        console.log(err);
        res.sendStatus(500);
    }
});

router.delete('/like/:quizID', validateUser, async (req,res) => {
    try{
        await Database.put('users', {id: req.user.user.id}, {favourites: {$in: [req.params.quizID]}}, '$pull');
        res.sendStatus(200)
    }
    catch(err){
        console.log(err);
        res.sendStatus(500);
    }
});


router.post("/validate", validateUser, async function(req, res) {
    res.send([req.user.user])
});

router.delete('/logout', function(req, res) {
    if(req.cookies['jwt']){
        res.clearCookie('jwt')
        res.sendStatus(200)
    }
});

module.exports = router;