import { Router, Request, Response } from "express";

const router = Router();

import Device from "../models/device";

router
  .route("/create")
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

  router
  .route("/list")
  .get(async (req: Request, res: Response) => {
    const devices = await Device.find();
    console.log(devices);
    res.send(JSON.parse(JSON.stringify(devices)));
  });

  router
  .route("/delete/:id")
  .get(async (req: Request, res: Response) => {
    console.log(req.params);
    await Device.findOneAndDelete(req.params)
    res.send('Eliminando')
  })
  .delete(async (req: Request, res: Response) => {
    console.log(req.params);
    await Device.findOneAndDelete(req.params)   
    res.send(`Elimnando con delete`)
  })

export default router;
