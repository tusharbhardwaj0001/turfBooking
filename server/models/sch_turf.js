import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
    turfid: { 
        required: true, 
        type: String 
    },
    schdate: { 
        required: true, 
        type: String 
    },
    turftiming: [{
        time: { 
            required: true, 
            type: String 
        },
        status: { 
            required: true, 
            type: String 
        },
        price: { 
            required: true, 
            type: String 
        },
        cstmrid: { 
            type: String 
        }
    }]
});

const SchTurf = mongoose.model('SchTurf', schema);

export default SchTurf;
