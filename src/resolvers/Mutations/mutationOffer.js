const { forwardTo } = require('prisma-binding')

async function createOffer (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

async function updateOffer (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

async function deleteOffer (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

module.exports = {
    createOffer,
    updateOffer,
    deleteOffer
}