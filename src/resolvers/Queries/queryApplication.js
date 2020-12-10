const { forwardTo } = require('prisma-binding')

async function application (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

async function applications (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

module.exports = {
    application,
    applications,
}