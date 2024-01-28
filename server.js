const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('This is the home page.');
});

app.get('/about', (req, res) => {
  const currentDate = new Date().toISOString();
  const members = require('./members');
  const response = {
    Status: 'success',
    Message: 'response success',
    Description: 'Exercise #03',
    Date: currentDate,
    Data: members,
  };
  res.json(response);
});

app.get('/users', async (req, res) => {
  try {
    const axios = require('axios');
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users = response.data;
    const usersModule = require('./users');
    usersModule.setData(users);

    res.json(usersModule.getData());
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
