const { forwardTo } = require("prisma-binding");

async function createReport (parent, args, ctx, info) {
    return forwardTo("prisma")(parent, args, ctx, info);
}

async function updateReport (parent, args, ctx, info) {
    return forwardTo("prisma")(parent, args, ctx, info);
}

async function deleteReport (parent, args, ctx, info) {
    return forwardTo("prisma")(parent, args, ctx, info);
}

module.exports = {
    createReport,
    updateReport,
    deleteReport
};