import mongoose from 'mongoose';

const { Schema } = mongoose;

const userProfileSchema = new Schema({
    username: { 
        required: true, 
        type: String 
    },
    phoneno: { 
        required: true, 
        type: String 
    },
    emailid: { 
        required: true, 
        type: String 
    },
    password: { 
        required: true, 
        type: String 
    }
});

const UserProfile = mongoose.model('UserProfile', userProfileSchema);

export default UserProfile;
