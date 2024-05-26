// userCredentials.js

import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
    userid: { 
        required: true, 
        type: String 
    },
    password: { 
        required: true, 
        type: String 
    }
});

const CredUser = mongoose.model('CredUser', schema);

export default CredUser;
