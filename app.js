const mongoose = require("mongoose");
const express = require("express");
const workRouter = require("./routes/workRoutes");

const app = express();

//middleware
app.use(express.json());

// routes
app.use("/api/works", workRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

//configure mongoose
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

module.exports = app;
