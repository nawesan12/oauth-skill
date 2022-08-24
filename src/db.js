const { connect } = require("mongoose");
const { MONGODB_URI } = require("./config");

connect(MONGODB_URI)
  .then(() => console.log("Todo bien!"))
  .catch((err) => console.error(err));
