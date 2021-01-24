const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { getUser } = require('../utils')
const fs = require('fs');

async function signup (_, args, context, info) {
    const password = await bcrypt.hash(args.password, 10);

    const user = await context.prisma.mutation.createUser(
        {
            data: {
                email: args.email,
                password: password,
                lastname: args.lastname,
                firstname: args.firstname,
                role: args.role
            },
        }
    )

    const exp = new Date();
    exp.setHours(exp.getHours() + 1)

    return generateToken(user.id, args.firstname, args.lastname, args.role)
}

async function login (parent, {email, password}, ctx, info) {
    const user = await ctx.prisma.query.user({ where: { email } }, '{ id email password lastname firstname role }')
    
    if (!user) {
        throw new Error(`No such user found for email: ${email}`)
    }
    const valid = await bcrypt.compare(password, user.password)

    if (!valid) {
        throw new Error('Invalid password')
    }

    return generateToken(user.id, user.firstname, user.lastname, user.email, user.role)
}

const generateToken = (userId, firstname, lastname, email, role) => {
    const privateKey = fs.readFileSync('./src/jwt/private.pem');

    return {
        token: jwt.sign({
            id: userId,
            firstname: firstname ?? null,
            lastname: lastname ?? null,
            email: email,
            roles: [role]
        }, {
            key: privateKey,
            passphrase: process.env.JWT_PASSPHRASE
        }, {
            algorithm: 'RS256',
            expiresIn: '1d'
        }),
    }
}

module.exports = {
    signup,
    login
}