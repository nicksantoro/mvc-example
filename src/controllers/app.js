const model = require('../models/app')

getAllUsers = (req, res, next) => {
  let promise = model.getAllUsers()

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })

  promise.catch(error => {
    next(error)
  })
}

module.exports = {
  getAllUsers
}