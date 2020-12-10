const { forwardTo } = require('prisma-binding')

async function experience (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

async function experiences (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

module.exports = {
    experience,
    experiences,
}