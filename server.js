const express = require('express');
const app = express();

app.use(express.static(__dirname + "/public"))

app.get('/', (req, res) => {
  // res.send('<h1>Hello Express<h1>');
  res.send({
    name: 'Thonas',
    likes: ["pizza", "code", "snowboarding"]
  })
})

app.get('/about', (req, res) => {
  res.send('About me!...')
})

app.get('/bad', (req, res) => {
res.send({
  error: "unable to fill this request"
})
})
app.listen(3000, () => {
  console.log('Server is up on port 3000')
});
