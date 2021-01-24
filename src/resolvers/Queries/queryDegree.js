const { forwardTo } = require("prisma-binding");

async function degree (parent, args, ctx, info) {
    return forwardTo("prisma")(parent, args, ctx, info);
}

async function degrees (parent, args, ctx, info) {
    return forwardTo("prisma")(parent, args, ctx, info);
}

module.exports = {
    degree,
    degrees,
};