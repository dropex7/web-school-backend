const { Router } = require('express')
const { check, validationResult } = require('express-validator')
const queries = require('../sql/queries')
const bcrypt = require('bcrypt')

const router = Router()

router.post('/login', [
  check('login', 'Username required').notEmpty(),
  check('password', 'Short password').isLength({ min: 4 })
], async (req, res) => {
  try {
    console.log(123132);
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
          errors: errors.array(),
          message: 'Invalid registration'
      })
    }
    const users = await queries.getUsers()
    const { login, password } = req.body
    const user = users.find(user => user.login === login)
    if (!user) {
      return res.status(400).json({ message: 'Invalid login' })
    }
    const isMatch = password === user.hashed_password;
    if (!isMatch) {
      return res.status(400).json({ message: 'Wrong password'})
    }
    return res.status(200).json({
      userID: user.userID,
      login,
      role: user.role,
      message: 'Entered',
    })
  } catch (e) {
    return res.status(500).json({ message: `Server error: ${e.message}` })
  }
})

module.exports = router