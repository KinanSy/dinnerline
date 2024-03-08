// https://blog.logrocket.com/build-rest-api-node-express-mysql/
const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const mealCategoryRouter = require("./routes/mealCategory");
const mealRouter = require("./routes/meal");
const cors = require("cors");
require('dotenv').config();
const port = process.env.PORT

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
app.use("/user", userRouter);
app.use("/mealCategory", mealCategoryRouter);
app.use("/meal", mealRouter);
/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});
app.listen(port, () => {
  console.log(`DinnerlineAPI listening at http://localhost:${port}`);
});