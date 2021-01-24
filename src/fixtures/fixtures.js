const {Prisma} = require("prisma-binding");
const bcrypt = require("bcryptjs");

const main = async () => {
    console.log("Starting generating data fixtures...");

    const prisma = new Prisma({
        typeDefs: "./src/generated/prisma.graphql",
        endpoint: "http://prisma:4466"
    });

    const password = await bcrypt.hash("Password", 10);

    await prisma.mutation.createDegree({data: {label: "Baccalauréat"}});
    await prisma.mutation.createDegree({data: {label: "BTS"}});
    await prisma.mutation.createDegree({data: {label: "License"}});
    await prisma.mutation.createDegree({data: {label: "Master 1"}});
    await prisma.mutation.createDegree({data: {label: "Master 2"}});

    await prisma.mutation.createTag({data: {label: "Symfony"}});
    await prisma.mutation.createTag({data: {label: "Front"}});
    await prisma.mutation.createTag({data: {label: "Back"}});
    await prisma.mutation.createTag({data: {label: "SIRH"}});
    await prisma.mutation.createTag({data: {label: "JS"}});
    await prisma.mutation.createTag({data: {label: "Prisma"}});
    await prisma.mutation.createTag({data: {label: "API"}});
    await prisma.mutation.createTag({data: {label: "Go"}});
    await prisma.mutation.createTag({data: {label: "Python"}});

    await prisma.mutation.createUser({data: {email: "employee@gmail.com", plainPassword: "", password, firstname: "John", lastname: "Doe", role: "ROLE_EMPLOYEE", status: "ENABLED"}});
    await prisma.mutation.createUser({data: {email: "employer@gmail.com", plainPassword: "", password, firstname: "John", lastname: "Doe", role: "ROLE_EMPLOYER", status: "ENABLED"}});
    await prisma.mutation.createUser({data: {email: "admin@gmail.com", plainPassword: "", password, firstname: "John", lastname: "Doe", role: "ROLE_ADMIN", status: "ENABLED"}});

    console.log("Successfully generated data fixtures.");
};

main().catch(error => {
    console.log("Failed to generate data fixtures.");
    console.error(error);
});

