const { forwardTo } = require("prisma-binding");

async function createPresentationPage (parent, args, ctx, info) {
    return forwardTo("prisma")(parent, args, ctx, info);
}

async function updatePresentationPage (parent, args, ctx, info) {
    return forwardTo("prisma")(parent, args, ctx, info);
}

async function deletePresentationPage (parent, args, ctx, info) {
    return forwardTo("prisma")(parent, args, ctx, info);
}

module.exports = {
    createPresentationPage,
    updatePresentationPage,
    deletePresentationPage
};