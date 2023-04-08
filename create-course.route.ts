import { Request, Response } from "express";
import { TREATMENTS } from "./db-data";

export var treatmentKeyCounter = 26;

export function createTreatment(req: Request, res: Response) {
  console.log("Creating new treatment ...");

  const changes = req.body;

  const newTreatment = {
    id: treatmentKeyCounter,
    ...changes,
  };

  TREATMENTS[newTreatment.id] = newTreatment;

  treatmentKeyCounter += 1;

  setTimeout(() => {
    res.status(200).json(newTreatment);
  }, 2000);
}
