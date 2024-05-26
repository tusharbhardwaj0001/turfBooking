import mongoose from 'mongoose';

const { Schema } = mongoose;

const infoTurfSchema = new Schema({
    adminid: { 
        required: true, 
        type: String 
    },
    turfname: { 
        required: true, 
        type: String 
    },
    location: { 
        required: true, 
        type: String 
    },
    pricewithlight: { 
        required: true, 
        type: Number 
    },
    pricewithoutlight: { 
        required: true, 
        type: Number 
    },
    starttimewithoutlight: { 
        required: true, 
        type: String 
    },
    endtimewithoutlight: { 
        required: true, 
        type: String 
    },
    turftiming: [
        {
            time: { 
                required: true, 
                type: String 
            },
            status: { 
                required: true, 
                type: String 
            }
        }
    ]
});

const InfoTurf = mongoose.model('InfoTurf', infoTurfSchema);

export default InfoTurf;
