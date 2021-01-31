const express = require('express');
const app = express();
const dotenv = require('dotenv');
const PORT = process.env.PORT || 5000;

app.use('/public', express.static('public'));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('./index');
});

app.listen(PORT, console.log(`Server is listening on port ${PORT}`));
