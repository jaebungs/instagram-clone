import TestUser from '../model/testUser';

export const loginWithLocal = (email, password) => {
    return TestUser.findOne({email, password})
}

export const getUserByEmail = email => {
    return TestUser.findOne({ email })
}

export const createNewUser = ({ email, password }) => {
    return TestUser.create({ email, password })
}