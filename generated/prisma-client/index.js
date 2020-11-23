"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Address",
    embedded: false
  },
  {
    name: "Application",
    embedded: false
  },
  {
    name: "Degree",
    embedded: false
  },
  {
    name: "Message",
    embedded: false
  },
  {
    name: "Offer",
    embedded: false
  },
  {
    name: "PresentationPage",
    embedded: false
  },
  {
    name: "Report",
    embedded: false
  },
  {
    name: "Study",
    embedded: false
  },
  {
    name: "Tag",
    embedded: false
  },
  {
    name: "Status",
    embedded: false
  },
  {
    name: "Role",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `${process.env["URL_DB_PRISMA"]}`
});
exports.prisma = new exports.Prisma();
