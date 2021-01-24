const { forwardTo } = require("prisma-binding");

async function createApplication (parent, args, ctx, info) {
    return forwardTo("prisma")(parent, args, ctx, info);
}

async function updateApplication (parent, args, ctx, info) {
    return forwardTo("prisma")(parent, args, ctx, info);
}

async function deleteApplication (parent, args, ctx, info) {
    return forwardTo("prisma")(parent, args, ctx, info);
}

module.exports = {
    createApplication,
    updateApplication,
    deleteApplication
};