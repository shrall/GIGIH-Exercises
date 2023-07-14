const transactionModel = require("../model/transaction.js");
const customerModel = require("../model/customer.js");

function transfer(sourceId, destinationId, amount) {
  sourceAccount = customerModel.getCustomer(sourceId);
  destinationAccount = customerModel.getCustomer(destinationId);
  if (!sourceAccount || !destinationAccount) {
    throw new Error("Invalid source or destination account");
  }
  if (sourceAccount.balance < amount) {
    throw new Error("Insufficient balance in the source account");
  }
  sourceAccount.balance -= amount;
  destinationAccount.balance += amount;
  transactionModel.createTransaction(
    sourceAccount.customerId,
    destinationAccount.destinationId,
    amount
  );
  return;
}

module.exports = { transfer };
