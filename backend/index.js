import cors from 'cors';
import express from 'express'; 
import dotenv from "dotenv";

import routes from "./routes/index.js"; 

dotenv.config(); 

const app = express(); 
const PORT = process.env.PORT || 5050;

app.use(cors({ origin: "*" }));
app.use(express.json({limit: "10mb"}));
app.use(express.urlencoded({extended: true}));

// app.get("/api-v1/ping", (req, res) => {
//   res.json({ ok: true, message: "server is alive" });
// });

app.use("/api-v1", routes)

app.use((req, res) => {
  res.status(404).json({
    status: "404 Not found",
    message: "Route not found",
  });
});


app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});