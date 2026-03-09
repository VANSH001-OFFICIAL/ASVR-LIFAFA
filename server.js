const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/signup.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'public/login.html')));

app.post('/signup', (req, res) => {
    // Yaha database logic aayega
    console.log(req.body);
    res.redirect('/login');
});

app.post('/login', (req, res) => {
    // Yaha authentication logic aayega
    res.sendFile(path.join(__dirname, 'public/dashboard.html'));
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
