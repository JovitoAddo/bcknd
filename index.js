const express = require("express");
const cors = require("cors");

const db = require("./config/db")
const router = require("./routes/indexRouter")

const app = express();
const PORT = process.env.PORT || 8000;

// buat koneksi
db
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB"));

app.use(cors());
app.use(express.json());
app.use(router)

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});