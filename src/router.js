const express = require('express')
const router = express.Router()
// const { ListService, ServiceRequest } = require('../controllers/ServiceController')

router.get('/', (req, res) => {
  res.send('Hello Word!. API Counter Cho va Nhan')
})

router.get('/v1/public/post-values', (req, res) => {
  res.json({
    "userCount": 49,
    "postCount": 13,
    "receivedCount": 0
  })
})

module.exports = router;