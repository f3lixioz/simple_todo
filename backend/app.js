const express = require('express');
const app = express();
const port = 3001;
const morgan = require('morgan');
const db = require('./db')
const cors = require('cors')


app.use(express.json());
//tells middleware how to route everything (need 'tiny')
app.use(morgan('tiny'));
app.use(cors())

app.listen(port,()=>{
    console.log(`Listening on ${port}`);
});
app.get('/', (req,res) => {
    res.send('Root');
    res.end();
})


app.get('/categories', (req,res) => {
    //db query statement
    db.query("SELECT * FROM categories;").then(data => {
        console.log(data);
        res.status(200);
        res.json(data.rows);
    })
})