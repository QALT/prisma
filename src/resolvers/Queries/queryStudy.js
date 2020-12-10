const { forwardTo } = require('prisma-binding')

async function study (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

async function studies (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

module.exports = {
    study,
    studies,
}