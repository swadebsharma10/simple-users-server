const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


// middleware
app.use(cors());
app.use(express.json());

const users =[
    {id: 1, name: 'Swadeb', email: 'swadeb@gmail.com'},
    {id: 2, name: 'Bobita', email: 'bobita@gmail.com'},
    {id: 3, name: 'Kobita', email: 'kobita@gmail.com'},
    {id: 4, name: 'Sobita', email: 'sobita@gmail.com'},
]

app.get('/', (req, res) => {
  res.send('Hello User Is Running!')
})


app.get('/users', (req , res) =>{
    res.send(users)
})

app.post('/users', (req, res)=>{
    const newUser = req.body;
    console.log(newUser);
    newUser.id =  users.length + 1;
    users.push(newUser);

    res.send(newUser)
    
})

app.listen(port, () => {
  console.log(`User server is running on port ${port}`)
})