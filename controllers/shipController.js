const { validationResult } = require("express-validator");
const Ship = require("../models/Ship");

//lista de barcos (READ)
const getShips = async (req, res) => {
  const ships = await Ship.find();

  res.status(200).json({ ships, msg: "Ok" });
};

//obtener un barcos x ID
const getShipById = async (req, res) => {
 

  const ship = await Ship.findById(req.params.id);

  if (ship !== undefined && ship !== null) {
    res.status(200).json({ ship: ship, msg: "Ok" });
  } else {
    res
      .status(404)
      .json({ ship: null, msg: "El barco no ha sido encontrado" });
  }
};

//obtener un barco por nombre de barco
const getShipByName = async (req, res) => {
  const ship = await Ship.findOne({ shipname: req.query.ship });
  console.log(ship);

  if (ship !== undefined && ship !== null) {
    res.status(200).json({ ship, msg: "Ok" });
  } else {
    res
      .status(404)
      .json({ ship: null, msg: "El barco no ha sido encontrado" });
  }
};

//crear un barco nuevo (CREATE)
const postShip = async (req, res) => {
  try {
    const validationError = validationResult(req);

    if (validationError.isEmpty()) {

      const ship = new Ship(req.body);
      await ship.save();

      res.status(201).json({
        ship: ship.shipname,
        msg: "El barco ha sido creado exitosamente",
      });
    } else {
      res.status(400).json({
        msg: "Error en el registro del barco",
        error: validationError.errors,
      });
    }
  } catch (error) {
    res.status(500).json({
      ship: null,
      msg: "Hubo un error al crear el barco - " + error.message,
    });
  }
};

//actualizar barco (UPDATE)
const updateShip = async (req, res) => {
  try {
    await Ship.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).json({ msg: "Barco actualizado" });
  } catch (error) {
    res.status(500).json({ msg: "Error al actualizar - " + error.message });
  }
};

//eliminar barco (DELETE)
const deleteShip = async (req, res) => {
  try {
    await Ship.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "Barco eliminado" });
  } catch (error) {
    res.status(500).json({ msg: "Error al eliminar - " + error.message });
  }
};

module.exports = {
  getShips,
  getShipById,
  getShipByName,
  postShip,
  updateShip,
  deleteShip,
};
