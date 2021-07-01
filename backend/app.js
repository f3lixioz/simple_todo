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

app.get('/todos', (req,res) => {
    //db query statement

    // select * from join table, get task for the id and name of the category
    // SELECT Orders.OrderID, Customers.CustomerName, Shippers.ShipperName FROM ((Orders INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID) INNER JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID);
    // SELECT todos.task, categories.name FROM ((todos_categories INNER JOIN todos ON todos_categories.todos_id = todos.id) INNER JOIN categories ON todos_categories.categories_id = categories.id);

    // ALTER TABLE todos ADD categories
    db.query("SELECT * FROM todos;").then(data => {
        res.status(200);
        res.json(data.rows);
    })
})

let tempTaskId = ''
let tempCatId = ''

const setTaskId=(id)=>{
    tempTaskId = id
    return tryJoinTableInsert()
}

const setCatId=(id)=>{
    tempCatId = id
    return tryJoinTableInsert()
}

function tryJoinTableInsert() {
    if (tempTaskId !== '' && tempCatId !== '') {
        console.log('taskid, and cat id:', tempTaskId, tempCatId)
        db.query(`INSERT INTO todos_categories(todos_id,categories_id) VALUES ('${tempTaskId}','${tempCatId}');`);
    }
    return
};

app.post('/todos', (req,res) => {


    db.query(`INSERT INTO todos(task) VALUES ('${req.body.task}');`)
    .then( value =>{
        const taskId = db.query(`SELECT id FROM todos WHERE task = '${req.body.task}';`)
        return(taskId);
    })
    .then(data =>{
        setTaskId(data.rows[0].id);
        return taskId;
    })

    // db.query(`INSERT INTO (task) VALUES ('${req.body.task}');`)
    db.query(`SELECT * FROM categories WHERE name = '${req.body.category}';`)
    .then(data =>{
        setCatId(data.rows[0].id);
        console.log(data.rows[0].id);
        return catId;
    })

    //const catId = db.query(`SELECT * FROM categories WHERE name = '${req.body.category}';`)
  
    
    //db.query(`INSERT INTO todos_categories(todos_id,categories_id) VALUES ('${taskId}','${catId}');`)
    // look up the task we just put in
    // look up category id
    // insert into join table, task_id and category_id
    // .then(data => {
    //     console.log(data);
    //     res.status(401);
    //     res.end();
    // })
});

app.post('/todos/delete/:id', (req,res) => {
    console.log(req.params.id)
    db.query(`DELETE FROM todos WHERE id='${req.params.id}';`)
    .then(res.status(200));
    res.end();
})