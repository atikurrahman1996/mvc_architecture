const express = require("express");
const userRouter = require("./routes/users.route");
const productRouter = require("./routes/products.route");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.use(productRouter);

// shows error if user go to wrong url

app.use((req, res, next) => {
  res.send("404 resource not found!");
});

app.listen(PORT, () => {
  console.log(` The server is running at http://localhost:${PORT}`);
});
