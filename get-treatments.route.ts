import { Request, Response } from "express";
import { TREATMENTS } from "./db-data";

export function getAllTreatments(req: Request, res: Response) {
  console.log("Retrieving treatments data ...");

  setTimeout(() => {
    res.status(200).json({ payload: Object.values(TREATMENTS) });
  }, 1000);
}

export function getTreatmentByCategory(req: Request, res: Response) {
  const treatmentCategory = req.params["treatmentCategory"];

  const treatments: any = Object.values(TREATMENTS);

  const singleTreatment = treatments.find(
    (t) => t.category == treatmentCategory
  );

  setTimeout(() => {
    res.status(200).json(singleTreatment);
  }, 1000);
}
