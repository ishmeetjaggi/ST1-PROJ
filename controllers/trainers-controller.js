const { urlencoded } = require("express");
const Trainer = require("../model/Trainer");

const getAllTrainers = async (req, res, next) => {
  let trainers;
  try {
    trainers = await Trainer.find();
  } catch (err) {
    console.log(err);
  }

  if (!trainers) {
    return res.status(404).json({ message: "No products found" });
  }
  return res.status(200).json({ trainers });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let trainer;
  try {
    trainer = await Trainer.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!trainer) {
    return res.status(404).json({ message: "No Trainer found" });
  }
  return res.status(200).json({ trainer });
};

const addTrainer = async (req, res, next) => {
  const { name, age, experience, qualification, rating} = req.body;
  let trainer;
  try {
    trainer = new Trainer({
      name,
      age,
      experience,
      qualification,
      rating
    });
    await trainer.save();
  } catch (err) {
    console.log(err);
  }

  if (!trainer) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ trainer });
};

const updateTrainer = async (req, res, next) => {
  const id = req.params.id;
  const { name, age, experience, qualification, rating} = req.body;
  let trainer;
  try {
    trainer = await Trainer.findByIdAndUpdate(id, {
      name,
      age,
      experience,
      qualification,
      rating
     
    });
    trainer = await trainer.save();
  } catch (err) {
    console.log(err);
  }
  if (!trainer) {
    return res.status(404).json({ message: "Unable To Update By this ID" });
  }
  return res.status(200).json({ trainer });
};

// const deleteBook = async (req, res, next) => {
//   const id = req.params.id;
//   let book;
//   try {
//     book = await Book.findByIdAndRemove(id);
//   } catch (err) {
//     console.log(err);
//   }
//   if (!book) {
//     return res.status(404).json({ message: "Unable To Delete By this ID" });
//   }
//   return res.status(200).json({ message: "Product Successfully Deleted" });
// };

//book = trainer Book = Trainer

const deleteTrainer = async (req, res, next) => {
    const id = req.params.id;
    try {
      const trainer = await Trainer.findByIdAndDelete(id);
      if (!trainer) {
        return res.status(404).json({ message: "Unable to find trainer" });
      }
      return res.status(200).json({ message: "Trainer successfully deleted" });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Internal server error" });
    }
};

exports.getAllTrainers = getAllTrainers;
exports.addTrainer = addTrainer;
exports.getById = getById;
exports.updateTrainer = updateTrainer;
exports.deleteTrainer = deleteTrainer;