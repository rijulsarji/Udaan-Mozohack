const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scholarshipSchema = new Schema({
  title: { type: String },
  description: { type: String },
  eligibility: { type: String },
  benefits: { type: String },
  contact: { type: String },
  website: { type: String },
});

const jobSchema = new Schema({
  post: { type: String },
  govtOrg: { type: String },
  vacancies: { type: String },
  lastDate: { type: String },
  ageLimit: { type: String },
  payScale: { type: String },
  apply: { type: String },
  website: { type: String },
});

const heroSchema = new Schema({
  title: { type: String },
  subTitle: { type: String },
  para1: { type: String },
  para2: { type: String },
  image: { type: String },
});

const ngoSchema = new Schema ({
  title: { type: String },
  description: { type: String },
})

const Scholarships = mongoose.model("scholarships", scholarshipSchema);
const Jobs = mongoose.model("jobs", jobSchema);
const Heroes = mongoose.model("heroes", heroSchema);
const NGOs = mongoose.model("ngos", ngoSchema);

module.exports = { Scholarships, Jobs, Heroes, NGOs };
