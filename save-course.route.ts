import { Request, Response } from "express";
import { TREATMENTS } from "./db-data";

export function savetreatment(req: Request, res: Response) {
  console.log("Saving course ...");

  const id = req.params["id"],
    changes = req.body;

  TREATMENTS[id] = {
    ...TREATMENTS[id],
    ...changes,
  };

  setTimeout(() => {
    res.status(200).json(TREATMENTS[id]);
  }, 2000);
}
