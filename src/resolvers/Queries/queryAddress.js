const { forwardTo } = require('prisma-binding')

async function address (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

async function addresses (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

module.exports = {
    address,
    addresses
}