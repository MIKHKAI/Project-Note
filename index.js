const path = require('path');
const pool = require('./data/config');
const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')
app.set('views', 'views')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Get All row
app.get('/',  async (req, res) => {
    pool.query('SELECT * FROM note', (err, result) => {
        if (err) throw err

        res.render('index', {result})
    })
   
})