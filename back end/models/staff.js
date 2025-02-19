const mongoose = require("mongoose");
const Staff = mongoose.model("Staff", {
  name: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: false,
  },
  cin: [
    {
      type: String,
    },
  ],
  assignedSites: {
    type: String,
  },
});
module.exports = Staff;
