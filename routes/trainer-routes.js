const express = require("express");
const router = express.Router();
const Trainer = require("../model/Trainer");
const trainersController = require("../controllers/trainers-controller");

router.get("/", trainersController.getAllTrainers);
router.post("/", trainersController.addTrainer);
router.get("/:id", trainersController.getById);
router.put("/:id", trainersController.updateTrainer);
router.delete("/:id", trainersController.deleteTrainer);



module.exports = router;