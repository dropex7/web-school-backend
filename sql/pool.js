const { Pool } = require('pg')
const config = require('config');
const connectionString = config.get('connectionString')

const pool = new Pool({
  connectionString
})

module.exports = pool