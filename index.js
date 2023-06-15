const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

// req = request / res = response
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/sound/:name', (req, res) => {
  const { name } = req.params
  console.log(name)

  if (name == "cat") {
    res.json({ 
      'sound': '야옹',
      'imgSrc': 'https://i.ibb.co/9NFc2qw/happycat.gif' 
   })
  } else if (name == "dog") {
    res.json({ 
      'sound': '멍멍',
      'imgSrc': 'https://i.ibb.co/XC6SDd0/doge.jpg' 
    })
  } else if (name == "hamster") {
    res.json({ 
      'sound': '찍찍',
      'imgSrc': 'https://i.ibb.co/CzMZ9Qb/hamster.jpg' 
     })
  } else {
    res.json({ 'sound': '알수없음' })
  }
})

// 서버가 켜져있음
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})