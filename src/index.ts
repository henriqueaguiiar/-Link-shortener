import express from "express";
import "dotenv/config";
import route from "./routes/route";

const app = express();

app.use(express.json());

app.use(route);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
