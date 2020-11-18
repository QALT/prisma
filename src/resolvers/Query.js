const { me } = require('./auth')
const { user, users } = require('./Queries/queryUser')

const Query = {
    me,
    user,
    users
}

module.exports = {
    Query
}