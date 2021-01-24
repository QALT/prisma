const { forwardTo } = require("prisma-binding");

async function report (parent, args, ctx, info) {
    return forwardTo("prisma")(parent, args, ctx, info);
}

async function reports (parent, args, ctx, info) {
    return forwardTo("prisma")(parent, args, ctx, info);
}

module.exports = {
    report,
    reports,
};