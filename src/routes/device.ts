import { Router, Request, Response } from "express";

const router = Router();

import Device from "../models/device";

router.route("/create")
  .get((req: Request, res: Response) => {
    res.send("received...Device");
  })
  .post(async (req: Request, res: Response) => {
    const { UID, provider, creation_date, gateway_id, status, id } = req.body;
    const newDevice = new Device({ UID, provider, creation_date, gateway_id, status, id });
    console.log('Device: ', newDevice);
    await newDevice.save();
    res.send("Saved");
  });

  router.route("/list")
  .get(async (req: Request, res: Response) => {
    const devices = await Device.find();
    console.log(devices);
    res.send(JSON.parse(JSON.stringify(devices)));
  });

  router.route("/delete/:id")  
  .delete(async (req: Request, res: Response) => {    
    await Device.findOneAndDelete(req.params)    
    res.send(`Delete`)
  })

  router.route("/edit/:id")  
  .get(async (req: Request, res: Response) => {    
    const {id} = req.params;
    const device = await Device.findById(id);    
    res.send(JSON.parse(JSON.stringify(device)))  
  })
  .post(async (req: Request, res: Response) => {
    const {id} = req.params;
    const { UID, provider, creation_date, gateway_id, status } = req.body;
    await Device.findByIdAndUpdate(id,{ UID, provider, creation_date, gateway_id, status })
    res.send('Update OK')
  })

export default router;
