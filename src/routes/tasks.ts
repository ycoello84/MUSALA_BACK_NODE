import { Router, Request, Response } from "express";

const router = Router();

// router.get("/create", (req: Request, res: Response) => {
// console.log('task create...');
// });

router.route('/create')
.get((req: Request, res: Response)=> {
  res.send('received...')
})

export default router;