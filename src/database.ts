import  mongoose  from "mongoose";

async function connect() {
    try{
        mongoose.connect();
    }catch {
        
    }
}