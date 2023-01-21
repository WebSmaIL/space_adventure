import express from 'express'
const router = express.Router()

router.get('/', function (req, res) {
    res.send({ testData: ['1', '2', '3'] })
})

export default router
