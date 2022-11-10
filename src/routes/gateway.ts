import { Router, Request, Response } from "express";
import Gateway from "../models/gateway";

const router = Router();
router.route("/create")
  .get((req: Request, res: Response) => {
    res.send("received...Gateway");
  })
  .post(async (req: Request, res: Response) => {
    const { id, ip, name, serial } = req.body;
    const newGateway = new Gateway({  id, ip, name, serial  });
    console.log('Gateway: ', newGateway);
    await newGateway.save();
    res.send("Saved");
  });

  router.route("/list")
  .get(async (req: Request, res: Response) => {
    const gateways = await Gateway.find();
    console.log(gateways);
    res.send(JSON.parse(JSON.stringify(gateways)));
  });

  router.route("/delete/:id")
  .get(async (req: Request, res: Response) => {
    console.log(req.params);
    await Gateway.findOneAndDelete(req.params)
    res.send('Eliminando')
  })
  .delete(async (req: Request, res: Response) => {
    console.log(req.params);
    await Gateway.findOneAndDelete(req.params)   
    res.send(`Elimnando con delete`)
  })

  router.route("/edit/:id")  
  .get(async (req: Request, res: Response) => {    
    const {id} = req.params;
    const gateway = await Gateway.findById(id);    
    res.send(JSON.parse(JSON.stringify(gateway)))  
  })
  .post(async (req: Request, res: Response) => {
    const {id} = req.params;
    const { ip, name, serial } = req.body;
    await Gateway.findByIdAndUpdate(id,{ ip, name, serial })
    res.send('Update Gateway OK')
  })

export default router;
