import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
//   res.render();
console.log('TEST 5555');
});

export default router;
