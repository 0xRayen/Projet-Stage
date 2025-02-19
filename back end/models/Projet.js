const mongoose = require("mongoose");

const Projet = mongoose.model("Projet", {
  nomChantier: {
    type: String,
    required: true,
    unique: true,
  },
  nomMaitreOuvrage: {
    type: String,
    required: true,
  },
  delaiDebut: {
    type: Date,
    required: true,
  },
  delaiFin: {
    type: Date,
    required: true,
  },
  debutHoraires: {
    type: String, // Assuming this is a string (e.g., "08:00")
    required: true,
  },
  finHoraires: {
    type: String, // Assuming this is a string (e.g., "17:00")
    required: true,
  },
  responsable: {
    type: String,
    required: true,
  },
  categories: {
    type: String,
    required: true,
  },
  // Optional: If you want to keep references to other collections
  operateurs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "operator",
      default: [],
    },
  ],
  equipements: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "equipement",
    },
  ],
  materiels: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "materiel",
    },
  ],
  personnels: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "staff",
    },
  ],
});

module.exports = Projet;
