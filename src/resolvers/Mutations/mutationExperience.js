const { forwardTo } = require("prisma-binding");

async function createExperience (parent, args, ctx, info) {
    return forwardTo("prisma")(parent, args, ctx, info);
}

async function updateExperience (parent, args, ctx, info) {
    return forwardTo("prisma")(parent, args, ctx, info);
}

async function deleteExperience (parent, args, ctx, info) {
    return forwardTo("prisma")(parent, args, ctx, info);
}

module.exports = {
    createExperience,
    updateExperience,
    deleteExperience
};