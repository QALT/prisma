require('dotenv').config()
const jwt = require('jsonwebtoken')
const fs = require('fs');

async function getUser(ctx) {
    const Authorization = ctx.req.request.get('Authorization')
    if (Authorization && Authorization !== 'null') {
        const token = Authorization.replace('Bearer ', '');
        const publicKey = fs.readFileSync('./src/jwt/public.pem');
        const { userId } = jwt.verify(token, publicKey)
        const user = await ctx.prisma.query.user({ where: { id: userId } }, '{ id name email }')
        return user
    } else {  
        throw new AuthError()
    }
}

class AuthError extends Error {
    constructor() {
        super('Not authorized')
    }
}

module.exports = {
    getUser,
}
