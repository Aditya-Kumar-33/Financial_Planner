import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/nifty50", async (req, res) => {
  try {
    const response = await axios.get(
      "https://query1.finance.yahoo.com/v8/finance/chart/^NSEI?range=1y&interval=1d"
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});