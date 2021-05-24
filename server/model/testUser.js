import mongoose from 'mongoose';

const testUser = new mongoose.Schema({
    email: String,
    password: String
});

export default('TestUser', testUser)