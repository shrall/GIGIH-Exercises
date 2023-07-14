const express = require("express");
const bodyParser = require("body-parser");
const transactionController = require("./controller/transaction.js");

const app = express();
app.use(bodyParser.json());

app.get("/transactions", transactionController.getAllTransactions);
app.post("/transactions", transactionController.createTransaction);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
