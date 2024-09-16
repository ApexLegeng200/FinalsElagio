const express = require('express');
const app = express();
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {title: 'My EJS App Christian Benedict C. Elagio'});
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});