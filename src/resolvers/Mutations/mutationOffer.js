const { forwardTo } = require("prisma-binding");

async function createOffer (parent, args, ctx, info) {
    return forwardTo("prisma")(parent, args, ctx, info);
}

async function updateOffer (parent, args, ctx, info) {
    return forwardTo("prisma")(parent, args, ctx, info);
}

async function deleteOffer (parent, args, ctx, info) {
    const applications = await ctx.prisma.query.applications({ where: { offer: { id: args.where.id } } }, "{ id offer { id } }");

    await applications.forEach(async application => {
        await ctx.prisma.mutation.deleteApplication({ where: { id: application.id } }, "{ id }");
    });

    return forwardTo("prisma")(parent, args, ctx, info);
}

module.exports = {
    createOffer,
    updateOffer,
    deleteOffer
};