const { forwardTo } = require('prisma-binding')

async function presentationPage (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

async function presentationPages (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

module.exports = {
    presentationPage,
    presentationPages,
}