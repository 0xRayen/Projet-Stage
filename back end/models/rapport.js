const mongoose = require("mongoose");

const Rapport = mongoose.model("Rapport", {
  nomChantier: {
    type: String,
    required: false,
  },
  nomMaitreOuvrage: {
    type: String,
    required: false,
  },
  delaiDebut: {
    type: Date, // Assuming delaiDebut is a date
    required: false,
  },
  delaiFin: {
    type: Date, // Assuming delaiFin is a date
    required: false,
  },
  debutHoraires: {
    type: String, // Assuming debutHoraires is a string (e.g., "08:00")
    required: false,
  },
  finHoraires: {
    type: String, // Assuming finHoraires is a string (e.g., "17:00")
    required: false,
  },
  responsable: {
    type: String,
    required: false,
  },
  categories: {
    type: String, // Assuming categories is a string (you can change it to an array if needed)
    required: false,
  },
  // Optional: Keep the existing fields if they are still relevant
  title: {
    type: String,
    required: false,
  },
  dateCreation: {
    type: Date,
    required: false,
  },
  createur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "operator",
    required: false,
  },
  projet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Projet",
    required: false,
  },
  observations: {
    type: String,
    required: false,
  },
  problemes: {
    type: String,
    required: false,
  },
  temps: {
    type: String,
    enum: ["Beau", "nuageux", "pluvieux", "ensoleillé", "orageux"],
    default: "Beau", // Corrected typo from "Beaux" to "Beau"
    required: false,
  },
});

module.exports = Rapport;
