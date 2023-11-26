import { ChatGPTAPI } from "chatgpt";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(cors());
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);

app.post("/", async (req, res) => {
  const api = new ChatGPTAPI({
    apiKey: "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",
  });

  console.log(req.body);
  console.log("waiting...");

  const r = await api.sendMessage(req.body.prompt);
  console.log(r.text);
  res.send(r.text);
});

app.listen(3000, () => console.log("Example app is listening on port 3000."));

async function example() {}

example();
