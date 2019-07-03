
import express from 'express';
import fs from 'fs';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const data = [{ name: 'john', age: '45' }];

app.get('/data', (req, res, next) => {
  res.json(data);
});

app.post('/data', (req, res)  => {
  const newData = req.body;
  // const myArray = {...newData}

  

  fs.writeFile('file.txt', JSON.stringify(myArray), (err) => {
    if (err) throw err;
    console.log('sent to text!');
  });
  res.send(newData);
});

app.listen(3005, () => {
  console.log('Server running on port 3005');
});
