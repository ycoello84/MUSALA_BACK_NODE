import express from 'express';

class Applicattion {
    app: express.Application;
    constructor(){
        this.app = express();
    }

    start() {
        this.app.listen(3000, () => {
            console.log('Server running...');
        })
    }
}
export default Applicattion;