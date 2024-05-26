// credAdmin.js

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

const CredAdmin = mongoose.model('CredAdmin', schema);

export default CredAdmin;
