const express = require("express")
const config = require("config")
const PORT = config.get("port")
const cors = require("cors")
const app = express()

app.use(cors())
app.options("*", cors())
app.use(express.json({ extended: true }))
app.use('/api', require('./routes/main.routes'))
app.use('/auth', require('./routes/auth.routes'))

app.get("/courses", (req, res) => {
  res.send(courses)
})

async function start() {
  try {
    app.listen(PORT, () => console.log("APP HAS BEEN STARTED."))
  } catch (e) {
    console.log("Server error: ", e.message)
    process.exit(1)
  }
}

start();
