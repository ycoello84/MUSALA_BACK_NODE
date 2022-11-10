import express from "express";
import morgan from "morgan";
import exphbs from 'express-handlebars';
import path from "path";

//
import indexRoutes from './routes';
import deviceRoutes from './routes/device'
import gatewayRoutes from './routes/gateway'

class Applicattion {
  app: express.Application;
  constructor() {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  settings() {
    this.app.set("port", 3000);
    this.app.set('views', path.join(__dirname, 'views'));   
  }

  middlewares() {
    this.app.use(morgan("dev"));
    this.app.use(express.json());
  }

  routes() {
    this.app.use(indexRoutes);
    this.app.use('/device',deviceRoutes);
    this.app.use('/gateway',gatewayRoutes);
  }

  start() {
    this.app.listen(this.app.get('port'), () => {
      console.log("Server on port...", this.app.get('port'));
    });
  }
}
export default Applicattion;
