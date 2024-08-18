import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

import TimelineSvc from "./services/TimelineService";

dotenv.config();

const app: Express = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.get("/loadImages", async (req: Request, res: Response) => {
  const userId = req.query["user"] as string;
  const tlId = req.query["tlId"] as string;

  const tlSvc = new TimelineSvc(process.env);
  const timelineMetadata = await tlSvc.getTimelineData(userId, tlId);

  res.status(200).send(timelineMetadata);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Open this to preview http://localhost:${PORT}`);
});
