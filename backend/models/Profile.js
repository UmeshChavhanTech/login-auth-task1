const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  education: [String],
  skills: [String],
  projects: [
    {
      title: String,
      description: String,
      links: { github: String, live: String }
    }
  ],
  workLinks: {
    github: String,
    linkedin: String,
    portfolio: String
  }
});

module.exports = mongoose.model("Profile", profileSchema);
