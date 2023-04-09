import * as express from "express";
import { Application } from "express";
import {
  getAllTreatments,
  getTreatmentByCategory,
} from "./get-treatments.route";
// import { searchLessons } from "./search-lessons.route";
import { loginUser } from "./auth.route";
import { savetreatment } from "./save-course.route";
import { createTreatment } from "./create-course.route";
import { deleteTreatment } from "./delete-course.route";

const bodyParser = require("body-parser");

const app: Application = express();

const cors = require("cors");

app.use(cors({ origin: true }));

app.use(bodyParser.json());

app.route("/api/login").post(loginUser); //ok

app.route("/api/treatments").get(getAllTreatments); //ok

app.route("/api/treatment").post(createTreatment); //ok

app.route("/api/treatment/:id").put(savetreatment); //ok

app.route("/api/treatment/:id").delete(deleteTreatment); //ok

app.route("/api/treatments/:treatmentCategory").get(getTreatmentByCategory); //ok

// app.route("/api/lessons").get(searchLessons);

const httpServer: any = app.listen(9000, () => {
  console.log(
    "HTTP REST API Server running at http://localhost:" +
      httpServer.address().port
  );
});
