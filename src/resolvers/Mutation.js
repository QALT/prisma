const { createAddress, updateAddress, deleteAddress } = require('./Mutations/mutationAddress')
const { createApplication, updateApplication, deleteApplication } = require('./Mutations/mutationApplication')
const { createDegree, updateDegree, deleteDegree } = require('./Mutations/mutationDegree')
const { createExperience, updateExperience, deleteExperience } = require('./Mutations/mutationExperience')
const { createMessage, updateMessage, deleteMessage } = require('./Mutations/mutationMessage')
const { createOffer, updateOffer, deleteOffer } = require('./Mutations/mutationOffer')
const { createPresentationPage, updatePresentationPage, deletePresentationPage } = require('./Mutations/mutationPresentationPage')
const { createReport, updateReport, deleteReport } = require('./Mutations/mutationReport')
const { createStudy, updateStudy, deleteStudy } = require('./Mutations/mutationStudy')
const { createTag, updateTag, deleteTag } = require('./Mutations/mutationTag')
const { createUser, updateUser, deleteUser } = require('./Mutations/mutationUser')
const { login, signup } = require('./auth')

const Mutation = {
    createAddress, updateAddress, deleteAddress,
    createApplication, updateApplication, deleteApplication,
    createDegree, updateDegree, deleteDegree,
    createExperience, updateExperience, deleteExperience,
    createMessage, updateMessage, deleteMessage,
    createOffer, updateOffer, deleteOffer,
    createPresentationPage, updatePresentationPage, deletePresentationPage,
    createReport, updateReport, deleteReport,
    createStudy, updateStudy, deleteStudy,
    createTag, updateTag, deleteTag,
    createUser, updateUser, deleteUser,
    login, signup
}

module.exports = {
    Mutation
}