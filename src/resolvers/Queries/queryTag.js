const { forwardTo } = require('prisma-binding')

async function tag (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

async function tags (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

module.exports = {
    tag,
    tags,
}