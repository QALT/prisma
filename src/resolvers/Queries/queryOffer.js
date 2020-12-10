const { forwardTo } = require('prisma-binding')

async function offer (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

async function offers (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

module.exports = {
    offer,
    offers,
}