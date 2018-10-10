const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/app')

router.get('/', ctrl.getAllUsers)

module.exports = router;