const { forwardTo } = require("prisma-binding");

async function createTag (parent, args, ctx, info) {
    return forwardTo("prisma")(parent, args, ctx, info);
}

async function updateTag (parent, args, ctx, info) {
    return forwardTo("prisma")(parent, args, ctx, info);
}

async function deleteTag (parent, args, ctx, info) {
    return forwardTo("prisma")(parent, args, ctx, info);
}

module.exports = {
    createTag,
    updateTag,
    deleteTag
};