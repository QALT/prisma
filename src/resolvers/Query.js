const { address, addresses } = require("./Queries/queryAddress");
const { application, applications } = require("./Queries/queryApplication");
const { degree, degrees } = require("./Queries/queryDegree");
const { experience, experiences } = require("./Queries/queryExperience");
const { message, messages } = require("./Queries/queryMessage");
const { offer, offers } = require("./Queries/queryOffer");
const { presentationPage, presentationPages } = require("./Queries/queryPresentationPage");
const { report, reports } = require("./Queries/queryReport");
const { study, studies } = require("./Queries/queryStudy");
const { tag, tags } = require("./Queries/queryTag");
const { user, users } = require("./Queries/queryUser");

const Query = {
    address, addresses,
    application, applications,
    degree, degrees,
    experience, experiences,
    message, messages,
    offer, offers,
    presentationPage, presentationPages,
    report, reports,
    study, studies,
    tag, tags,
    user, users,
};

module.exports = {
    Query
};