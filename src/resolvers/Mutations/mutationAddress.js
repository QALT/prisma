const { forwardTo } = require('prisma-binding')

async function createAddress (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

async function updateAddress (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

async function deleteAddress (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

module.exports = {
    createAddress,
    updateAddress,
    deleteAddress
}