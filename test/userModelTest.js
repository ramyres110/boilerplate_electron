const should = require('chai').should()
const UserModel = require('../model/userModel');

describe('UserModelTest', function () {
    it('UserModel should connect', function () {

        new UserModel().should.be.ok;

    });
});