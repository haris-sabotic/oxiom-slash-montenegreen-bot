import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import * as fs from "fs";

const app = express();

let BASE = {};
fs.readFile("baza.json", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  BASE = data;
});

app.use(cors());
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);

app.get("/", async (req, res) => {
  res.send(BASE);
});

app.post("/", async (req, res) => {
  BASE = req.body;
  console.log(BASE);
  res.send({});
});

app.listen(3001, () => console.log("Example app is listening on port 3001."));

async function example() {}

example();
