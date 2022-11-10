import { Schema, model} from 'mongoose';

const GatewayShema = new Schema({
    id: { 
        type: String,
        require: true,
        lowercase: true
    },
    ip: { 
        type: String,
        require: true,
        lowercase: true
    },
    name: { 
        type: String,
        require: true,
        lowercase: true
    },
    serial: { 
        type: String,
        require: true,
        lowercase: true
    }
});

export default model('Gateway', GatewayShema)