import * as express from "express";
import { Application } from "express";
import {
  getAllTreatments,
  getTreatmentByCategory,
} from "./get-treatments.route";
import { searchLessons } from "./search-lessons.route";
import { loginUser } from "./auth.route";
import { saveCourse } from "./save-course.route";
import { createTreatment } from "./create-course.route";
import { deleteCourse } from "./delete-course.route";

const bodyParser = require("body-parser");

const app: Application = express();

const cors = require("cors");

app.use(cors({ origin: true }));

app.use(bodyParser.json());

app.route("/api/login").post(loginUser); //ok

app.route("/api/treatments").get(getAllTreatments); //ok

app.route("/api/treatment").post(createTreatment); //ok

app.route("/api/course/:id").put(saveCourse);

app.route("/api/course/:id").delete(deleteCourse);

app.route("/api/treatments/:treatmentCategory").get(getTreatmentByCategory); //ok

app.route("/api/lessons").get(searchLessons);

const httpServer: any = app.listen(9000, () => {
  console.log(
    "HTTP REST API Server running at http://localhost:" +
      httpServer.address().port
  );
});
