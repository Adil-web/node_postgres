const Pool = require('pg').Pool
const pool = new Pool({
    user: "qxvfcvvogtvwmf",
    password: "520ce0d451b80d7329ac01335957789d11b636693363bca61db7bd80ec8ab012",
    host: "ec2-54-220-53-223.eu-west-1.compute.amazonaws.com",
    port: 5432,
    database: "d837r1vbf4r54s",
      dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
})

module.exports = pool
