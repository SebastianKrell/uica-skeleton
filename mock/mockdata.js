"use strict"
module.exports = (() => {

    const mockdata = require('uica-stack/mockdata-registry')

    // Sequenz Ids
    mockdata.userId = 1;
    mockdata.projectId = 1;

    mockdata.users = require('./mockdata/mockdata-users')(mockdata)
    mockdata.projects = require('./mockdata/mockdata-project')(mockdata)

    return mockdata
})()
