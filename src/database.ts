import mongoose from 'mongoose';

 async function connect() {
  try {
    await mongoose.connect('mongodb://localhost/ts-app-musala');
    console.log('Server conected....');
  } catch {
    console.log("Error");
  }
}
export default connect
