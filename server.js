// const express = require('express')
// const cors = require('cors')
// const path = require('path')
// const fs = require('fs')

// const PORT = process.env.PORT || 5000;

// const app = express()

// app.use(cors())
// app.use(express.json())

// let imageUrl = "https://fastly.picsum.photos/id/813/400/400.jpg?hmac=3eUkOPA1X4a9JB_fNq27cSoZ_ii17tUciJnLjDvW7lA"

// app.get('/', (req, res) => {
//     const filePath = path.resolve(__dirname, "./build", "index.html")
//     fs.readFile(filePath, "utf-8", (err, data) => {
//         if(err){
//             return console.log(err)
//         }
//         data = data
//         .replace(/__IMAGE__/g, imageUrl)

//         res.send(data)
//     })
// })

// app.post('/', (req, res) => {
//     imageUrl = req.body.imageUrl
// })

// app.use(express.static(path.resolve(__dirname, "./build")))

// app.listen(PORT, () => {
//     console.log(`Server Started on Port ${PORT}`)
// })

// server.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

let imageUrl = 'https://fastly.picsum.photos/id/813/400/400.jpg?hmac=3eUkOPA1X4a9JB_fNq27cSoZ_ii17tUciJnLjDvW7lA';

app.get('/', (req, res) => {
  const filePath = path.resolve(__dirname, './build', 'index.html');
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/__IMAGE__/g, imageUrl);

    res.send(data);
  });
});

app.post('/', (req, res) => {
  imageUrl = req.body.imageUrl;
  console.log('server received request')
  res.sendStatus(200);
});

app.use(express.static(path.resolve(__dirname, './build')));

app.listen(PORT, () => {
  console.log(`Server Started on Port ${PORT}`);
});
