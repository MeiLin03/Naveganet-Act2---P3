const express = require('express');
const passport = require('passport');
const session = require('express-session');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

// Configuración de la sesión
app.use(session({
  secret: 'your secret',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new GoogleStrategy({
  clientID: '602497294830-o01kggtvubtho16t86jp74v2e11t13hd.apps.googleusercontent.com',
  clientSecret: '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',
  callbackURL: 'http://localhost:1000/auth/google/callback'
},
function(token, tokenSecret, profile, done) {
  // Aquí puedes manejar el perfil del usuario y almacenar la información en la base de datos
  return done(null, profile);
}
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] })
);

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/home'); // Redirige al usuario a la página de inicio después de iniciar sesión con Google
  });

app.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/');
  });
});

app.listen(1000, () => {
  console.log('Server is running on port 1000');
});
