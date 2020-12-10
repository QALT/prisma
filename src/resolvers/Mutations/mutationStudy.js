const { forwardTo } = require('prisma-binding')

async function createStudy (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

async function updateStudy (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

async function deleteStudy (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

module.exports = {
    createStudy,
    updateStudy,
    deleteStudy
}