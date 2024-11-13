const express = require("express");

const userRouter = require("./routes/users.route.js");
const productRouter = require("./routes/products.route.js")

const app = express();
const PORT = 3006;

app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.use(productRouter);

app.use((req, res) => {
  res.status(404).json({
    message: "Resource not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
