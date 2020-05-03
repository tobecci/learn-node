const express = require('express');

const app = express();

app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;

app.get(`/`, (req, res) => {
    res.render('index')
});

app.get(`/contact`, (req, res) => {
    res.send(`this is the contact page`);
});

app.get(`/user/:id`, (req, res) => {
    const data = { age:29, job:'ninja', hobbies: ['eating', 'reading', 'coding']};
    res.render('user',{ id : req.params.id, data:data });
});

app.listen(port,() => {
    console.log(`server started at port ${port}`);
});