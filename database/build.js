const db = require('./connection')
const path = require('path')
const fs = require('fs')

const initQueryPath = path.join(__dirname, 'init.sql')
const initQuery = fs.readFileSync(initQueryPath, { encoding: 'utf-8' })

db.query(initQuery)
    .then(() => {
        console.log('Database has been built!')
    })
    .catch(() => {
        console.log('Database failed to build!')
    })