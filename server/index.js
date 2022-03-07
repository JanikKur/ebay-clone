require('dotenv').config();
const PORT = process.env.PORT || 8080;
const express = require('express');
const environment = process.env.NODE_ENV || 'development';
const isDevelopment = environment === 'development';
const cors = require('cors');
const fileUpload = require('express-fileupload');
const users = require('./routes/users');
const cookieParser = require('cookie-parser');
const Database = require('./database/database');
const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const JwtCookieComboStrategy = require('passport-jwt-cookiecombo');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const rateLimit = require('express-rate-limit')
const compression = require('compression');
const helmet = require('helmet');

const app = express();
!isDevelopment && app.use(helmet());
app.use(compression());

isDevelopment && app.use(cors({
    origin: ['http://localhost:3000', 'http://192.168.2.100:3000'],
    credentials: true
}));

app.use(fileUpload({
    createParentPath: true
}));

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 1000, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})


app.use(limiter);

app.use(morgan('common', {
    stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
}));
app.use('/images', express.static(path.join(__dirname + '/public/images')))
app.use(express.static(path.join(__dirname + '/../build/')))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/*--ROUTES--*/
app.use('/api/users', users);

passport.use(new JwtCookieComboStrategy({
    secretOrPublicKey: 'StRoNGs3crE7'
}, (payload, done) => {
    return done(null, payload.user);
}));

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
    function (email, password, done) {
        Database.get('users', { email: email }).then((result, err) => {
            let user = result[0];
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            bcrypt.compare(password, user.password, function (err, result) {
                if (err || (result === false)) {
                    return done(null, false);
                }
                if (result === true) {
                    return done(null, user);
                }
            });
        })
    }
));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/../build/index.html'));
});

app.listen(PORT, console.log(`App is listening on port ${PORT}`))