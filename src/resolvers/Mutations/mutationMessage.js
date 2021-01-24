const { forwardTo } = require("prisma-binding");

async function createMessage (parent, args, ctx, info) {
    return forwardTo("prisma")(parent, args, ctx, info);
}

async function updateMessage (parent, args, ctx, info) {
    return forwardTo("prisma")(parent, args, ctx, info);
}

async function deleteMessage (parent, args, ctx, info) {
    return forwardTo("prisma")(parent, args, ctx, info);
}

module.exports = {
    createMessage,
    updateMessage,
    deleteMessage
};