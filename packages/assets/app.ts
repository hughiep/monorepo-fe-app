import express from "express";

const app = express();

const PORT = 5000;

app.use(express.static("static"));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
