import { Request, Response } from "express";
import { TREATMENTS } from "./db-data";

export function deleteTreatment(req: Request, res: Response) {
  console.log("Deleting treatment ...");

  const id = req.params["id"];

  const course = TREATMENTS[id];

  delete TREATMENTS[id];

  setTimeout(() => {
    res.status(200).json({ id });
  }, 2000);
}
