const express = require('express')
const router = express.Router()
// const { ListService, ServiceRequest } = require('../controllers/ServiceController')

router.get('/', (req, res) => {
  res.send('Hello Word!. API Counter Cho va Nhan')
})

router.get('/v1/public/post-values', (req, res) => {
  res.json({
    "userCount": 2271,
    "postCount": 655,
    "receivedCount": 535
  })
})

module.exports = router;