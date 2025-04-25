//index.js
const express = require('express');
const app = express();

console.log(app)



app.get('/', (req, res) => {
    res.send('Hello from our server!')
})

app.listen(8080, () => {
      console.log('server listening on port 8080')
})


