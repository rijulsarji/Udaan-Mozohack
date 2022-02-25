const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const http = require("http")

app.use(express.json())
dotenv.config({ path: "./config.env" })

// estabilishing server
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening to port ${port}...`)
})

// for CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, x-auth-token'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

// estabilishing connection with database
const dbURI = process.env.DATABASE;
mongoose
  .connect(dbURI)
  .then(() => {
    console.log("Connection with database successful...")
  })

// making api routes

const { Scholarships, Jobs, Heroes, NGOs } = require("./udaanSchema");
const e = require("express");

app.get("/", (req, res) => {
  res.send("Navigate to api/scholarships");
})

// scholarships
app.post(("/api/scholarships"), (req, res) => {
  const data = new Scholarships(req.body);
  res.json(data);
  data.save()
    .then(() => console.log("Scholarship details saved successfully"))
    .catch((err) => console.log("Error while saving scholarship data..."))
})

app.get(("/api/scholarships"), (req, res) => {
  Scholarships.find()
    .then(result => res.json(result))
    .catch(err => console.log(err))
})

app.get("/api/scholarships/deleteAllRecords", (req, res) => {
  const ip = req.socket.remoteAddress;
  if (ip == "::1")
    Scholarships.deleteMany().then(
      console.log("All details have been deleted")
    );
  else res.send("Non private session");
})

// jobs
app.post("/api/jobs", (req, res) => {
  const data = new Jobs(req.body);
  res.json(data);
  data.save()
    .then(() => console.log("Job details saved successfully"))
    .catch(err => console.log("Error while saving job data..."))
})

app.get("/api/jobs", (req, res) => {
  Jobs.find()
    .then(result => res.send(result))
    .catch(err => console.log(err))
})

// heroes
app.post("/api/heroes", (req, res) => {
  const data = new Heroes(req.body);
  res.json(data);
  data.save()
    .then(() => console.log("Hero details saved successfully"))
    .catch(err => console.log("Error while saving job data..."));
})

app.get("/api/heroes", (req, res) => {
  Heroes.find()
    .then(result => res.send(result))
    .catch(err => console.log(err))
})

// NGOs
app.post("/api/ngos", (req, res) => {
  const data = new NGOs(req.body);
  res.json(data);
  data.save()
    .then(() => console.log("NGO details saved successfully"))
    .catch(err => console.log("Error while saving NGO data..."))
})

app.get("/api/ngos", (req, res) => {
  NGOs.find()
    .then(result => res.send(result))
    .catch(err => console.log(err))
})