import { Schema, model} from 'mongoose';

const DeviceShema = new Schema({
    UID: { 
        type: String,
        require: true,
        lowercase: true
    },
    provider: { 
        type: String,
        require: true,
        lowercase: true
    },
    creation_date: { 
        type: String,
        require: true,
        lowercase: true
    },
    gateway_id: { 
        type: String,
        require: true,
        lowercase: true
    },
    status: { 
        type: Boolean,
        require: true    
    },
    id: { 
        type: String,
        require: true,
        lowercase: true
    }

});

export default model('Device', DeviceShema)