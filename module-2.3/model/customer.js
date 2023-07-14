let customers = [
  {
    customerId: "1",
    name: "John Doe",
    email: "johndoe@example.com",
    balance: 5000.0,
  },
  {
    customerId: "2",
    name: "John Doe",
    email: "johndoe@example.com",
    balance: 5000.0,
  },
];
function getAllCustomers() {
  return customers;
}
function getCustomer(customerId) {
  return customers.find((c) => c.customerId === customerId);
}
function createCustomer(name, email, initialBalance) {
  let newCustomer = {
    customerId: generateCustomerId(),
    name: name,
    email: email,
    balance: initialBalance,
  };
  return newCustomer;
}
function generateCustomerId() {
  return Math.random().toString(10).substr(2, 6);
}

module.exports = { getCustomer };
