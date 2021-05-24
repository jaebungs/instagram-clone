import mongoose from 'mongoose';

const testUser = new mongoose.Schema({
    email: String,
    password: String
}, {
    timestamps: true,
  });

const TestUser = mongoose.model('TestUser', testUser);
export default TestUser;

