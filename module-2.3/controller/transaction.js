const transactionService = require("../service/transaction.js");
const transactionModel = require("../model/transaction.js");

const TransactionController = {
  getAllTransactions: (req, res) => {
    {
      try {
        res.status(201).json(transactionModel.transactions);
      } catch (e) {
        //For example we'll always use code 500 (Internal Server Error)
        res.status(500).json({ error: e.message });
      }
    }
  },
  createTransaction: (req, res) => {
    {
      try {
        const { sourceAccount, destinationAccount, amount } = req.body;
        // res.json(sourceAccount);
        if (!sourceAccount || !destinationAccount || !amount) {
          throw new Error("Insufficient Parameter");
        }
        transactionService.transfer(sourceAccount, destinationAccount, amount);
        res.status(201).json({ message: "Transaction created successfully" });
      } catch (e) {
        //For example we'll always use code 500 (Internal Server Error)
        res.status(500).json({ error: e.message });
      }
    }
  },
};

module.exports = TransactionController;
